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
  guestSubtract: () => void;
  guestSum: () => void;
  guestsToQuery: number;
  error: ReactNode;
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
  const [error, setError] = useState('' as any);

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

  function guestSubtract() {
    if (guestsToQuery === 0) return;
    setGuestsToQuery(guestsToQuery - 1);
  }

  function guestSum() {
    setGuestsToQuery(guestsToQuery + 1);
  }



  function searchLocals(e: React.FormEvent) {
    e.preventDefault();
    const matchCityArray = locals.filter((local) => local.city === cityToQuery);

    if (matchCityArray.length === 0) return;

    if (guestsToQuery > 0) {
      const matchGuestsArray = matchCityArray.filter(
        (local) => guestsToQuery <= local.maxGuests
      ) 
        if (matchGuestsArray.length === 0) {
          setError(true);
          console.log('object')
        } else {
          setError(false);
        }

      setLocalsFiltered(matchGuestsArray);
    } 
     else {
      setLocalsFiltered(matchCityArray);
    }
    
  }

  return (
    <LocalsContext.Provider
      value={{
        locals,
        searchLocals,
        cityToQuery,
        guestSubtract,
        guestSum,
        cityMatch,
        localsFiltered,
        guestsToQuery,
        error
      }}
    >
      {children}
    </LocalsContext.Provider>
  );
};

//
