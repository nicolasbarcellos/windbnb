import styled from "styled-components";

export const Container = styled.div`
  max-height: 320px;
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;

  @media (max-width: 500px) {
    display: none;
  }

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

  &.closeModal {
    transform: translateY(-100%);
    visibility: hidden;
    opacity: 0;
  }

  form {
    display: flex;
    gap: 1rem;
    max-width: 120rem;
    margin: 0 auto;
    padding: 4rem 6%;
    height: 320px;

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

        &.inputActive {
          border: 1px solid #000;
        }
        &.error {
          border: 1px solid red;
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

    .btnSearch {
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

          transition: color 0.3s;

          &:hover {
            color: var(--red);
          }

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

  & .inputGuestWrapper {
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
    justify-content: flex-start;
    align-items: center;

    button {
 
      border: 0;
      background: transparent;
      cursor: pointer;

      color: var(--gray-light);

      display: inline-block;
      padding: 0.2rem 0.6rem;

      transition: all 0.3s;
      margin: 0;
      padding: 0;

      span {
        border: 1px solid var(--gray-light);
        border-radius: 4px;
        font-size: 2rem;
        padding: 0 1rem;

        &:hover {
          background: var(--red);
          border: 1px solid transparent;
          color: var(--background);
        }

        @media (max-width: 500px) {
          font-size: 2rem;
          padding: 0 1rem;
        }
      }
    }

    .inputWrapper {
      
      

      flex: 0;

      input[type="text"],
      input[type="password"],
      input[type="number"] {
        text-align: center;
        display: block;
        margin: 0 auto;
        outline: none;
      }

      input {
        display: block;
        margin: 0 auto;
        color: var(--gray);
        font-size: 1.4rem;
        padding: 0;
        width: 4rem;
      }
    }
  }
`;

export const MenuMobile = styled.div`
  height: 320px;
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;

  display: none;

  @media (max-width: 500px) {
    display: block;
    height: 80vh;
  }

  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;

  background: #fff;

  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);

  header {
    padding: 1rem 3% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: var(--gray);
      font: 700 1.2rem Mulish, sans-serif;
    }
  }

  &.active {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  &.closeModal {
    transform: translateY(-100%);
    visibility: hidden;
    opacity: 0;
  }

  form {
    display: flex;
    gap: 1rem;
    max-width: 120rem;
    margin: 0 auto;
    padding: 4rem 6%;

    @media (max-width: 500px) {
      flex-direction: column;

      padding: 2rem 6%;
      height: 95%;
    }

    div {
      flex: 1;
      position: relative;

      @media (max-width: 500px) {
        flex: none;
      }

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

        &.inputActive {
          border: 1px solid #000;
        }
        &.error {
          border: 1px solid red;
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
      min-height: 5rem;
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

      @media (max-width: 500px) {
        justify-content: center;
        /* width: 15rem; */
        margin: 0 auto;
      }

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
