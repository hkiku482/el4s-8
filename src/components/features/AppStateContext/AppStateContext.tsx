import { ReactNode, createContext, useState } from "react";

type AppStateContextType = {
  urls: string[];
  setUrls?: (urls: string[]) => void;
};

export const AppStateContext = createContext<AppStateContextType>({
  urls: [],
  setUrls: undefined,
});

type Props = {
  children: ReactNode;
};
export const AppStateProvider = ({ children }: Props) => {
  const [vid, setVid] = useState<string[]>([]);

  return (
    <AppStateContext.Provider value={{ urls: vid, setUrls: setVid }}>
      {children}
    </AppStateContext.Provider>
  );
};
