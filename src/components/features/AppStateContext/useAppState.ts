import { useContext } from "react";
import { AppStateContext } from "./AppStateContext";

export const useAppState = () => useContext(AppStateContext);
