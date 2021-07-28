import { useContext } from "react";
import { LocalsContext } from "../context/RoomsContext";
import { LocalsProviderData } from "../context/RoomsContext";

export function useLocals(): LocalsProviderData {
  const context = useContext(LocalsContext);
  return context;
}
