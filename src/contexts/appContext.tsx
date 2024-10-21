import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import {
  DisplayMode,
  DisplayModes,
  displayModes,
} from 'src/config/displayModes';
import {
  Interval,
  Mode,
  modesHTIntervals,
  modesIntervals,
} from 'src/config/modes';
import { Note, notes } from 'src/config/notes';
import { fourStrings, sixStrings } from 'src/config/tunings';

import { satisfies } from 'compare-versions';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import { useStorage } from 'src/hooks/useStorage';

export type AppContextType = {
  version: string;
  // Neck
  type: NeckType;
  setType: Dispatch<SetStateAction<NeckType>>;
  config: NeckConfig;
  // Tunnings
  tunings: TuningType[];
  tuning: TuningType;
  setTuning: Dispatch<SetStateAction<TuningType>>;
  // Tonic
  tonic: Note | '';
  setTonic: Dispatch<SetStateAction<Note | ''>>;
  // Display mode
  displayModes: DisplayModes;
  displayMode: DisplayMode | '';
  setDisplayMode: Dispatch<SetStateAction<DisplayMode | ''>>;
  // Mode
  mode: Mode | '';
  setMode: Dispatch<SetStateAction<Mode | ''>>;
  modeNotes: Note[];
  modeIntervals: Interval[];
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export interface AppContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

export const AppContextProvider = ({ children, ...props }: AppContextProps) => {
  const [version, setVersion] = useStorage<string>('app-version');
  const [type, setType] = useStorage<NeckType>(
    'app-user-guitar-type',
    'classic'
  );
  const { config } = useGuitarConfig(type);
  const [tuning, setTuning] = useStorage<TuningType>(
    `app-user-${type}-tuning`,
    config.defaults.tuning
  );
  const [tonic, setTonic] = useStorage<Note | ''>('app-user-tonic', '');
  const [mode, setMode] = useStorage<Mode | ''>('app-user-mode', '');
  const [displayMode, setDisplayMode] = useStorage<DisplayMode | ''>(
    'app-user-display-mode',
    ''
  );

  const tunings = useMemo(() => {
    switch (type) {
      case 'bass':
      case 'ukulele':
        return fourStrings;
      default:
      case 'classic':
      case 'lapsteel':
        return sixStrings;
    }
  }, [type]);

  const modeIntervals =
    mode !== '' && mode in modesIntervals
      ? (modesIntervals[mode] as Interval[])
      : [];

  const modeNotes = useMemo(() => {
    const tonicIndex = notes.findIndex((n) => n === tonic);
    const fromTonic = notes.slice(tonicIndex, notes.length);
    const beforeTonic = notes.slice(0, tonicIndex);
    const tonicSorted = [...fromTonic, ...beforeTonic];
    const modeHalfToneInterval = modesHTIntervals[mode as Mode] ?? [];
    return tonicSorted.reduce(
      (res, n, i) => (modeHalfToneInterval.includes(i) ? [...res, n] : res),
      [] as Note[]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, tuning, mode, tonic]);

  const processUpdates = () => {
    const envVersion = process?.env?.VITE_NETLIFY_CONTEXT ?? '';
    if (envVersion !== version) {
      const previousVersion = version;
      setVersion(envVersion);
      // Process upgrades
      switch (true) {
        case !version || satisfies(previousVersion, '<0.2.0'):
          if (`${mode}` === 'pentatonicMinor') setMode('minorPentatonic');
          break;
      }
    }
  };

  useEffect(() => {
    if (!tuning) {
      setTuning(config.defaults.tuning);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  useLayoutEffect(() => {
    processUpdates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        version,
        type,
        setType,
        config,
        tuning,
        setTuning,
        tunings,
        tonic,
        setTonic,
        mode,
        setMode,
        modeNotes,
        modeIntervals,
        displayModes,
        displayMode,
        setDisplayMode,
      }}
      {...props}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAppContext must be used within a AppContextProvider.`);
  }
  return context;
};
