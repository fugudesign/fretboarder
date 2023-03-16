import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { useStorage } from 'src/hooks/useStorage';

export type AppContextType = {
  type: NeckType;
  setType: Dispatch<SetStateAction<NeckType>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export interface AppContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

export const AppContextProvider = ({ children, ...props }: AppContextProps) => {
  const [type, setType] = useStorage<NeckType>('classic');

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
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
