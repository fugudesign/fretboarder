import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
} from 'react';
import { fourStrings, sixStrings } from 'src/config/tunings';

import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import { useStorage } from 'src/hooks/useStorage';
import { version } from '../../package.json';

export type AppContextType = {
  version: string;
  type: NeckType;
  setType: Dispatch<SetStateAction<NeckType>>;
  tuning: TuningType;
  setTuning: Dispatch<SetStateAction<TuningType>>;
  tunings: TuningType[];
  tonic: Note | '';
  setTonic: Dispatch<SetStateAction<Note | ''>>;
  mode: Mode | '';
  setMode: Dispatch<SetStateAction<Mode | ''>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export interface AppContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

export const AppContextProvider = ({ children, ...props }: AppContextProps) => {
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

  return (
    <AppContext.Provider
      value={{
        version,
        type,
        setType,
        tuning,
        setTuning,
        tunings,
        tonic,
        setTonic,
        mode,
        setMode,
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
