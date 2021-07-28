import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface LocalsProviderProps {
  children: ReactNode;
}

interface LocalsData {
  id: number;
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export interface LocalsProviderData {
  locals: LocalsData[];
  newLocals: LocalsData[];
  searchLocals: (locals: string, guests: number) => void;
}

export const LocalsContext = createContext<LocalsProviderData>(
  {} as LocalsProviderData
);

export const LocalsProvider = ({
  children,
}: LocalsProviderProps): JSX.Element => {
  const [locals, setLocals] = useState<LocalsData[]>([]);
  const [newLocals, setNewLocals] = useState<LocalsData[]>([]);

  useEffect(() => {
    async function loadLocals() {
      const response = await api.get("/locals");
      const newResponseWithId = response.data.map(
        (local: LocalsData, index: number) => ({
          ...local,
          id: index,
        })
      );
      setLocals(newResponseWithId);
    }

    loadLocals();
  }, []);

  function searchLocals(localCity: string, allGuests = 0) {
    const allLocals = [...locals];
    const localsExists = allLocals.filter((local) => local.city === localCity);
    const newLocals = localsExists.filter(
      (local) => local.maxGuests >= allGuests
    );
    setNewLocals(localsExists);

    if (allGuests > 0) {
      setNewLocals(newLocals);
    }
  }

  return (
    <LocalsContext.Provider value={{ locals, searchLocals, newLocals }}>
      {children}
    </LocalsContext.Provider>
  );
};

//
