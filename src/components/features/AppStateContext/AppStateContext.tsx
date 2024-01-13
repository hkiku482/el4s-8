import { ReactNode, createContext, useState } from "react";

type AppStateContextType = {
  urls: { id: string; url: string }[];
  setUrls?: (urls: { id: string; url: string }[]) => void;
};

export const AppStateContext = createContext<AppStateContextType>({
  urls: [],
  setUrls: undefined,
});

type Props = {
  children: ReactNode;
};
export const AppStateProvider = ({ children }: Props) => {
  const [vid, setVid] = useState<{ id: string; url: string }[]>([]);

  return (
    <AppStateContext.Provider value={{ urls: vid, setUrls: setVid }}>
      {children}
    </AppStateContext.Provider>
  );
};
