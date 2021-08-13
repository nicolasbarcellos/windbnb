import { Container, ContainerGuest } from "./style";

import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";

import { useLocals } from "../../hooks/useLocals";

interface HeaderActiveProps {
  isOpen: boolean;
}

export function HeaderActive({ isOpen }: HeaderActiveProps) {
  const {
    locals,
    cityMatch,
    searchLocals,
    cityToQuery,
    guestSubtract,
    guestSum,
    guestsToQuery,
  } = useLocals();

  const newCities = [...locals];
  const citiesFiltered = newCities
    .map((local) => local.city)
    .filter((city, index, self) => {
      return self.indexOf(city) === index;
    });

  return (
    <>
      <Container className={`${isOpen ? "active" : ""}`}>
        <form onSubmit={(e) => searchLocals(e)}>
          <div className="locationWrapper">
            <span className="titleInput">Location</span>
            <input value={cityToQuery} type="text" placeholder="Add location" />

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
          </div>
          <div className="guestWrapper">
            <span className="titleInput">Guest</span>
            <input
              type="text"
              placeholder="Add guests"
              value={guestsToQuery > 0 ? `${guestsToQuery} guests` : ""}
            />

            <ContainerGuest>
              <label htmlFor="adults">People</label>
              <p>Ages 2 or above</p>
              <div className="inputGuestWrapper">
                <button onClick={guestSubtract}>&minus;</button>
                <input
                  value={guestsToQuery}
                  min="0"
                  id="adults"
                  type="number"
                />
                <button onClick={guestSum}>&#43;</button>
              </div>
            </ContainerGuest>
          </div>
          <button>
            <AiOutlineSearch size={24} color="#fff" />
            Search
          </button>
        </form>
      </Container>
    </>
  );
}
