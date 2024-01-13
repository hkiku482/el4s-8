import { ReactNode, createContext, useState } from "react";

type AppStateContextType = {
  vid: string[];
  setVid?: (urls: string[]) => void;
  rows: number;
  setRows?: (rows: number) => void;
  cols: number;
  setCols?: (rows: number) => void;
};

export const AppStateContext = createContext<AppStateContextType>({
  vid: [],
  setVid: undefined,
  rows: 0,
  setRows: undefined,
  cols: 0,
  setCols: undefined,
});

type Props = {
  children: ReactNode;
};
export const AppStateProvider = ({ children }: Props) => {
  const [vid, setVid] = useState<string[]>([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  return (
    <AppStateContext.Provider
      value={{ vid, setVid, rows, setRows, cols, setCols }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
