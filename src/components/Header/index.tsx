import { Container } from "./style";

import { AiOutlineSearch } from "react-icons/ai";

import logoImg from "../../assets/logo.png";
import { HeaderActive } from "../HeaderActive";
import { useState } from "react";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(isOpenStatus: boolean) {
    setIsOpen(isOpenStatus);
  }

  return (
    <>
      <HeaderActive onSearch={handleOpen} isOpen={isOpen} />
      <Container>
        <img src={logoImg} alt="windbnb" />
        <button onClick={() => setIsOpen(true)}>
          <span>Location</span>
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
