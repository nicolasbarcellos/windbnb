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
  localsFiltered: LocalsData[];
  searchLocals: (e: React.FormEvent) => void;
  cityMatch: (city: string) => void;
  cityToQuery: string;
  guestsToQuery: number;
  errorLocation: boolean;
  errorGuest: boolean;
  totalGuests: (guests: number) => void;
  searchSucess: boolean;
}

export const LocalsContext = createContext<LocalsProviderData>(
  {} as LocalsProviderData
);

export const LocalsProvider = ({
  children,
}: LocalsProviderProps): JSX.Element => {
  const [locals, setLocals] = useState<LocalsData[]>([]);
  const [localsFiltered, setLocalsFiltered] = useState<LocalsData[]>([]);
  const [cityToQuery, setCityToQuery] = useState<string>("");
  const [guestsToQuery, setGuestsToQuery] = useState<number>(0);
  const [errorLocation, setErrorLocation] = useState(false);
  const [errorGuest, setErrorGuest] = useState(false);
  const [searchSucess, setSearchSucess] = useState(false);

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

  function cityMatch(city: string) {
    setCityToQuery(city);
  }

  function totalGuests(guests: number) {
    setGuestsToQuery(guests);
  }

  function searchLocals(e: React.FormEvent) {
    e.preventDefault();
    const matchCityArray = locals
      .filter((local) => local.city === cityToQuery)
      .filter((local) => guestsToQuery <= local.maxGuests);
    if (!cityToQuery && !guestsToQuery) {
      setErrorLocation(true);
      setErrorGuest(true);
      return;
    }

    if (!cityToQuery) {
      setErrorLocation(true);
      return;
    } else {
      setErrorLocation(false);
    }

    if (!guestsToQuery) {
      setErrorGuest(true);
      return;
    } else {
      setErrorGuest(false);
    }

    setLocalsFiltered(matchCityArray);
    setSearchSucess(true);
  }


  return (
    <LocalsContext.Provider
      value={{
        locals,
        searchLocals,
        cityToQuery,
        cityMatch,
        localsFiltered,
        guestsToQuery,
        errorLocation,
        errorGuest,
        totalGuests,
        searchSucess
      }}
    >
      {children}
    </LocalsContext.Provider>
  );
};

//
