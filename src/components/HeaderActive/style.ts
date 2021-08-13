import styled from "styled-components";

export const Container = styled.div`
  max-height: 320px;
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;

  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;

  background: #fff;

  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);

  &.active {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  form {
    display: flex;
    gap: 1rem;
    max-width: 120rem;
    margin: 0 auto;
    padding: 4rem 6%;
    max-height: 320px;

    div {
      flex: 1;
      position: relative;

      input {
        width: 100%;
        padding: 2.4rem 2rem 1.2rem 2rem;
        border-radius: 1.6rem;
        border: 0;
        outline: none;
        font: 1.4rem Mulish, sans-serif;

        box-shadow: 0px 1px 6px rgb(0 0 0 / 10%);

        &::placeholder {
          color: var(--gray-light);
        }
      }

      .titleInput {
        font-size: 1rem;
        font-weight: 800;
        font-family: "Mulish", sans-serif;
        color: var(--gray);
        text-transform: uppercase;

        position: absolute;
        left: 2rem;
        top: 0.8rem;
      }
    }

    button {
      display: flex;
      max-height: 5rem;
      align-items: center;
      gap: 0.5rem;
      border: 0;
      border-radius: 1.6rem;
      padding: 0 1.5rem;
      color: var(--background);
      font-family: "Mulish", sans-serif;
      font-weight: 800;
      font-size: 1.4rem;

      background: var(--red);
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .locationContent {
      padding: 2rem 0;

      ul {
        li {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          cursor: pointer;
          color: var(--gray-medium);
          font-size: 1.4rem;

          & + li {
            margin-top: 2rem;
          }
        }
      }
    }
  }
`;

export const ContainerGuest = styled.div`
  padding: 2rem 0;

  label {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--gray);
  }

  &  .inputGuestWrapper {
    margin-bottom: 2rem;
  }

  p {
    font-family: Mulish, sans-serif;
    font-size: 1.4rem;
    color: var(--gray-light);
    margin: 0.5rem 0;
  }

  .inputGuestWrapper {
    display: flex;
    /* align-items: center; */
    max-width: 10rem;

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      font-size: 2rem;
      color: var(--gray-light);
      border: 1px solid var(--gray-light);
      border-radius: 4px;
      padding: 0 .7rem;
      display: block;
    }

    input {
      display: inline-block;
      color: var(--gray);
      font-size: 1.4rem;
      text-align: center;
      box-shadow: none;
      padding: 0;
      width: 3rem;
      /* margin-left: 1rem; */
    }
  }
`;
