import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useLocals } from "../../hooks/useLocals";

import {
  Container,
  ContainerPanel,
  HeaderContent,
  Overlay,
  GuestContainer,
} from "./style";

import logoImg from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { api } from "../../services/api";

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

interface cities {
  id: number;
  city: string;
  country: string;
}

export function Header() {
  const { locals, searchLocals } = useLocals();

  const [city, setCity] = useState("");

  const [guestAdult, setGuestAdult] = useState(0);
  const [guestChildren, setGuestChildren] = useState(0);
  const [allLocals, setAllLocals] = useState<LocalsData[]>([]);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [isActive, setActive] = useState<number>(0);

  function handleSearch() {
    setSearchOpen(true);
  }

  function handleLocation() {
    setActive(0);
  }

  if (guestAdult < 0) {
    setGuestAdult(0);
  }
  if (guestChildren < 0) {
    setGuestChildren(0);
  }

  // const cities = allLocals.map(o => o.city);
  // const citiesFiltered = Array.from((new Set((cities))));
  // console.log(citiesFiltered);

  function handleAddGuests(event: any) {
    event.preventDefault();
    setActive(1);
  }

  function handleLocal(locals: cities) {
    setCity(locals.city);
  }

  function searchSubmit(locals: string) {
    const allGuests = guestChildren + guestAdult;
    searchLocals(locals, allGuests);
    setSearchOpen(false);
    setGuestChildren(0);
    setGuestAdult(0);
  }

  useEffect(() => {
    async function loadLocals() {
      const response = await api.get("/locals");
      setAllLocals(response.data);
    }

    loadLocals();
  }, []);

  const cities = [
    {
      id: 1,
      city: "Helsinki",
      country: "Finland",
    },
    {
      id: 2,
      city: "Turku",
      country: "Finland",
    },
    {
      id: 3,
      city: "Vaasa",
      country: "Finland",
    },
    {
      id: 4,
      city: "Oulu",
      country: "Finland",
    },
  ];

  function LocationContent() {
    return (
      <HeaderContent>
        {cities.map((local) => {
          return (
            <li key={local.id}>
              <IoLocationSharp color="#4f4f4f" size="19" />
              <span onClick={() => handleLocal(local)} className="local">
                {local.city}, {local.country}
              </span>
            </li>
          );
        })}
      </HeaderContent>
    );
  }

  function GuestContent() {
    return (
      <GuestContainer onSubmit={handleAddGuests}>
        <div>
          <label htmlFor="adult">Adults</label>
          <span>Ages 13 or above</span>
          <div className="input">
            <button onClick={() => setGuestAdult(guestAdult + 1)}>+</button>
            <input
              id="adult"
              type="text"
              defaultValue="0"
              min="0"
              value={guestAdult}
            />
            <button onClick={() => setGuestAdult(guestAdult - 1)}>-</button>
          </div>
        </div>

        <div>
          <label htmlFor="children">Children</label>
          <span>Ages 2-12</span>
          <div className="input">
            <button onClick={() => setGuestChildren(guestChildren + 1)}>
              +
            </button>
            <input
              id="children"
              type="text"
              defaultValue="0"
              min="0"
              value={guestChildren}
            />
            <button onClick={() => setGuestChildren(guestChildren - 1)}>
              -
            </button>
          </div>
        </div>
      </GuestContainer>
    );
  }

  function Modal() {
    return (
      <>
        <ContainerPanel isOpen={searchOpen}>
          <div className="modal">
            <div className="panel-wrapper">
              <div className="location">
                <button
                  className={isActive === 0 ? "active" : ""}
                  onClick={handleLocation}
                  type="button"
                >
                  <span>Location</span>
                  {city ? <p>{city}, Finland</p> : <p>Finland</p>}
                </button>
                {isActive === 0 ? <LocationContent /> : ""}
              </div>
              <div className="guests">
                <button
                  className={isActive === 1 ? "active" : ""}
                  onClick={handleAddGuests}
                  type="button"
                >
                  <span>Guests</span>
                  <p>Add guests</p>
                </button>
                {isActive === 1 ? <GuestContent /> : ""}
              </div>
              <button className="search-btn" onClick={() => searchSubmit(city)}>
                <AiOutlineSearch size="17" color="#FFF" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </ContainerPanel>
        {/* <Overlay onClick={() => setSearchOpen(false)}></Overlay> */}
      </>
    );
  }

  const portalElement = document.getElementById("header-root")!;

  function Header() {
    return (
      <Container>
        <img src={logoImg} alt="windbnb" />
        <button onClick={handleSearch}>
          <strong>Location</strong>
          <span>Add guests</span>
          <div>
            <AiOutlineSearch size="22" color="EB5757" />
          </div>
        </button>
      </Container>
    );
  }

  return (
    <>
      {ReactDOM.createPortal(<Modal />, portalElement)}
      <Header />
    </>
  );
}
