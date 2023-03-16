import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import { useStorage } from 'src/hooks/useStorage';

export type AppContextType = {
  type: NeckType;
  setType: Dispatch<SetStateAction<NeckType>>;
  tuning: TuningType;
  setTuning: Dispatch<SetStateAction<TuningType>>;
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

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        tuning,
        setTuning,
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
