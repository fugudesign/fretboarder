import { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo } from 'react';
import { DisplayMode, DisplayModes, displayModes } from 'src/config/displayModes';
import { Interval, Mode, modesHTIntervals, modesIntervals } from 'src/config/modes';
import { BaseNote, baseNotes } from 'src/config/notes';
import { bassTunings, guitarTunings, lapSteelTunings, ukuleleTunings } from 'src/config/tunings';

import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import { useStorage } from 'src/hooks/useStorage';

export type AppContextType = {
  // Neck
  type: NeckType;
  setType: Dispatch<SetStateAction<NeckType>>;
  config: NeckConfig;
  // Tunnings
  tunings: Tunings;
  tuning: Tuning;
  setTuning: Dispatch<SetStateAction<Tuning>>;
  // Tonic
  tonic: BaseNote | '';
  setTonic: Dispatch<SetStateAction<BaseNote | ''>>;
  // Display mode
  displayModes: DisplayModes;
  displayMode: DisplayMode | '';
  setDisplayMode: Dispatch<SetStateAction<DisplayMode | ''>>;
  // Mode
  mode: Mode | '';
  setMode: Dispatch<SetStateAction<Mode | ''>>;
  modeNotes: BaseNote[];
  modeIntervals: Interval[];
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export interface AppContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

export const AppContextProvider = ({ children, ...props }: AppContextProps) => {
  const [type, setType] = useStorage<NeckType>('app-user-guitar-type', 'guitar');
  const { config } = useGuitarConfig(type);
  const [tuning, setTuning] = useStorage<Tuning>(`app-user-${type}-tuning`, config.defaults.tuning);
  const [tonic, setTonic] = useStorage<BaseNote | ''>('app-user-tonic', '');
  const [mode, setMode] = useStorage<Mode | ''>('app-user-mode', '');
  const [displayMode, setDisplayMode] = useStorage<DisplayMode | ''>('app-user-display-mode', '');

  const tunings = useMemo(() => {
    switch (type) {
      default:
      case 'guitar':
        return guitarTunings;
      case 'bass':
        return bassTunings;
      case 'lapsteel':
        return lapSteelTunings;
      case 'ukulele':
        return ukuleleTunings;
    }
  }, [type]);

  const modeIntervals =
    mode !== '' && mode in modesIntervals ? (modesIntervals[mode] as Interval[]) : [];

  const modeNotes = useMemo(() => {
    const tonicIndex = baseNotes.findIndex((n) => n === tonic);
    const fromTonic = baseNotes.slice(tonicIndex, baseNotes.length);
    const beforeTonic = baseNotes.slice(0, tonicIndex);
    const tonicSorted = [...fromTonic, ...beforeTonic];
    const modeHalfToneInterval = modesHTIntervals[mode as Mode] ?? [];
    return tonicSorted.reduce(
      (res, n, i) => (modeHalfToneInterval.includes(i) ? [...res, n] : res),
      [] as BaseNote[]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, tuning, mode, tonic]);

  useEffect(() => {
    if (!tuning) {
      setTuning(config.defaults.tuning);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  return (
    <AppContext.Provider
      value={{
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
