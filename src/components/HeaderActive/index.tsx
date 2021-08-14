import { Container, ContainerGuest, MenuMobile } from "./style";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { useEffect, useState } from "react";
import { FormEvent } from "react";

import classNames from "classnames";

import { useLocals } from "../../hooks/useLocals";

interface HeaderActiveProps {
  isOpen: boolean;
  onSearch: (isOpenStatus: boolean) => void;
}

export function HeaderActive({ isOpen, onSearch }: HeaderActiveProps) {
  const {
    locals,
    cityMatch,
    searchLocals,
    cityToQuery,
    guestsToQuery,
    totalGuests,
    errorLocation,
    errorGuest,
  } = useLocals();

  const newCities = [...locals];
  const citiesFiltered = newCities
    .map((local) => local.city)
    .filter((city, index, self) => {
      return self.indexOf(city) === index;
    });

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [activeInputLocation, setActiveInputLocation] = useState(false);
  const [activeInputGuest, setActiveInputGuest] = useState(false);

  useEffect(() => {
    if (adults < 0) {
      setAdults(0);
    }

    if (children < 0) {
      setChildren(0);
    }

    totalGuests(adults + children);

    return () => {
      return;
    };
  }, [adults, children, totalGuests]);

  function getAdults(e: FormEvent, adults: number) {
    e.preventDefault();
    setAdults(adults);
  }

  function getChildren(e: FormEvent, children: number) {
    e.preventDefault();
    setChildren(children);
  }

  function handleLocationActive() {
    setActiveInputGuest(false);
    setActiveInputLocation(true);
  }

  function handleGuestActive() {
    setActiveInputGuest(true);
    setActiveInputLocation(false);
  }

  function handleSearch(e: FormEvent) {
    if (cityToQuery && guestsToQuery) {
      onSearch(false);
    }
    searchLocals(e);
  }

  function handleClose() {
    onSearch(false);
  }

  const errorLocationInvalid = errorLocation && !cityToQuery ? "error" : "";
  const errorGuestInvalid = errorGuest && !guestsToQuery ? "error" : "";

  return (
    <>
      <MenuMobile
        className={classNames({
          active: isOpen ? true : "",
        })}
      >
        <header>
          <h2>Edit your search</h2>
          <AiOutlineClose onClick={handleClose} size={24} color={"#000"} />
        </header>
        <form onSubmit={handleSearch}>
          <div className="locationWrapper">
            <span className="titleInput">Location</span>
            <input
              readOnly
              onClick={() => handleLocationActive()}
              className={classNames({
                error: errorLocationInvalid,
                inputActive: activeInputLocation,
              })}
              value={cityToQuery && `${cityToQuery}, Finland`}
              type="text"
              placeholder="Add location"
            />
          </div>
          <div className="guestWrapper">
            <span className="titleInput">Guest</span>
            <input
              readOnly
              onClick={() => handleGuestActive()}
              className={classNames({
                error: errorGuestInvalid,
                inputActive: activeInputGuest,
              })}
              type="text"
              placeholder="Add guests"
              value={guestsToQuery > 0 ? `${guestsToQuery} guests` : ""}
            />
          </div>
          {activeInputLocation && (
            <div className="locationContent">
              <ul>
                {citiesFiltered.map((city) => (
                  <li onClick={() => cityMatch(city)} key={city}>
                    <IoLocationSharp size={18} color={"#4F4F4F"} />
                    {city}, Finland
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeInputGuest && (
            <ContainerGuest>
              <label htmlFor="adults">Adults</label>
              <p>Ages 12 or above</p>
              <div className="inputGuestWrapper">
                <button onClick={(e) => getAdults(e, adults - 1)}>
                  <span>&minus;</span>
                </button>
                <input
                  readOnly
                  value={adults}
                  min="0"
                  id="adults"
                  type="number"
                />
                <button onClick={(e) => getAdults(e, adults + 1)}>
                  <span>&#43;</span>
                </button>
              </div>

              <label htmlFor="adults">Children</label>
              <p>Ages 2 - 12</p>
              <div className="inputGuestWrapper">
                <button onClick={(e) => getChildren(e, children - 1)}>
                  <span>&minus;</span>
                </button>
                <input
                  readOnly
                  value={children}
                  min="0"
                  id="adults"
                  type="number"
                />
                <button onClick={(e) => getChildren(e, children + 1)}>
                  <span>&#43;</span>
                </button>
              </div>
            </ContainerGuest>
          )}
          <button className='btnSearchMobile'>
            <AiOutlineSearch size={24} color="#fff" />
            Search
          </button>
        </form>
      </MenuMobile>

      <Container
        className={classNames({
          active: isOpen ? true : "",
        })}
      >
        <form onSubmit={handleSearch}>
          <div className="locationWrapper">
            <span className="titleInput">Location</span>
            <input
              readOnly
              onClick={() => handleLocationActive()}
              className={classNames({
                error: errorLocationInvalid,
                inputActive: activeInputLocation,
              })}
              value={cityToQuery && `${cityToQuery}, Finland`}
              type="text"
              placeholder="Add location"
            />

            {activeInputLocation && (
              <div className="locationContent">
                <ul>
                  {citiesFiltered.map((city) => (
                    <li onClick={() => cityMatch(city)} key={city}>
                      <IoLocationSharp size={18} color={"#4F4F4F"} />
                      {city}, Finland
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="guestWrapper">
            <span className="titleInput">Guest</span>
            <input
              readOnly
              onClick={() => handleGuestActive()}
              className={classNames({
                error: errorGuestInvalid,
                inputActive: activeInputGuest,
              })}
              type="text"
              placeholder="Add guests"
              value={guestsToQuery > 0 ? `${guestsToQuery} guests` : ""}
            />

            {activeInputGuest && (
              <ContainerGuest>
                <label htmlFor="adults">Adults</label>
                <p>Ages 12 or above</p>
                <div className="inputGuestWrapper">
                  <button onClick={(e) => getAdults(e, adults - 1)}>
                    <span>&minus;</span>
                  </button>
                  <div className="inputWrapper">
                    <input
                      readOnly
                      value={adults}
                      min="0"
                      id="adults"
                      type="number"
                    />
                  </div>

                  <button onClick={(e) => getAdults(e, adults + 1)}>
                    <span>&#43;</span>
                  </button>
                </div>

                <label htmlFor="children">Children</label>
                <p>Ages 2 - 12</p>
                <div className="inputGuestWrapper">
                  <button onClick={(e) => getChildren(e, children - 1)}>
                    <span>&minus;</span>
                  </button>
                  <div className="inputWrapper">
                    <input
                      readOnly
                      value={children}
                      min="0"
                      id="adults"
                      type="number"
                    />
                  </div>

                  <button onClick={(e) => getChildren(e, children + 1)}>
                    <span>&#43;</span>
                  </button>
                </div>
              </ContainerGuest>
            )}
          </div>
          <button className="btnSearch">
            <AiOutlineSearch size={24} color="#fff" />
            Search
          </button>
        </form>
      </Container>
    </>
  );
}
