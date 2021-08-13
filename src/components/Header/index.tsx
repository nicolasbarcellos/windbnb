import { Container } from "./style";

import { AiOutlineSearch } from "react-icons/ai";

import logoImg from "../../assets/logo.png";
import { HeaderActive } from "../HeaderActive";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderActive isOpen={isOpen} />
      <Container>
        <img src={logoImg} alt="windbnb" />
        <button onClick={() => setIsOpen(true)}>
          <strong>Location</strong>
          <span>Add guests</span>
          <div>
            <AiOutlineSearch size="22" color="EB5757" />
          </div>
        </button>
        {isOpen && (
          <div onClick={() => setIsOpen(false)} className="overlay"></div>
        )}
      </Container>
    </>
  );
}
