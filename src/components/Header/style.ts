import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  button {
    display: flex;
    align-items: center;

    font-family: "Mulish", sans-serif;
    font-size: 1.4rem;
    height: 5.5rem;

    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 1.6rem;
    border: 0;
    background: var(--background);

    > * {
      padding: 2rem;
    }

    strong {
      color: var(--gray);
      border-right: 1px solid #f2f2f2;
    }

    span {
      color: var(--gray-ultra-light);
      border-right: 1px solid #f2f2f2;
    }

    div {
      padding: 1rem;
      display: flex;
      justify-content: center;
    }
  }
`;

interface ContainerPanel {
  isOpen: boolean;
}

export const ContainerPanel = styled.div<ContainerPanel>`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    height: auto;
  
  .modal {
    transition: all 2s;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    z-index: 3;
    height: auto;

    /* transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")}; */

    background: var(--background);
  }

  .panel-wrapper {
    display: flex;
    gap: 2rem;
    max-width: 140rem;
    margin: 0 auto;
    padding: 4rem 6% 2rem 6%;

    button[type="button"] {
      width: 42.6rem;
      height: 5.5rem;
      padding-left: 1.5rem;

      font-family: "Mulish", sans-serif;
      text-align: left;

      filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
      color: var(--gray-ultra-light);
      background: var(--background);
      border-radius: 1.6rem;
      border: 0;

      &.active {
        border: 1px solid var(--gray);
        color: var(--gray);
      }
    }
    span {
      color: #000;
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: 800;
      font-style: normal;
      line-height: 2.1rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: normal;
      line-height: 1.8rem;
    }

    .search-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0;
      border: 0;

      width: 12.7rem;
      height: 4.8rem;
      border-radius: 1.6rem;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      background: var(--red);

      span {
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: capitalize;

        color: var(--background);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  height: 100%;

  background: #000;
  opacity: 0.7;
`;

export const HeaderContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 140rem;
  margin: 2rem auto;

  li {
    display: flex;
    align-items: center;

    .local {
      margin-left: 0.5rem;

      font-size: 1.4rem !important;
      font-weight: 400 !important;
      text-transform: capitalize !important;

      color: var(--gray-medium) !important;

      cursor: pointer;
    }
  }
`;

export const GuestContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  color: var(--gray);
  font-family: "Mulish";
  font-weight: bold;

  label {
    font-size: 1.4rem;
    display: block;
  }

  span {
    color: var(--gray-ultra-light) !important;
    text-transform: capitalize !important;
    font-size: 1.2rem !important;
  }

  input {
    display: inline-block;
    margin: 1rem 0 4rem 0;
    border: 0;

    width: 3rem;
    text-align: center;
    outline: none;

    color: var(--gray);
    font-weight: 700;
    font-size: 1.4rem;
  }

  .input {
    button {
      color: var(--gray-light);
      font-size: 1.5rem;
      font-weight: bold;

      background: 0;
      border: 1px solid currentColor;
      border-radius: 0.4rem;

      margin: 0 auto;

      height: 2.3rem;
      padding: 0 1rem;
    }
  }
`;
