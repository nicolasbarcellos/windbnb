import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 390px) {
    gap: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;

    @media (max-width: 390px) {
      margin: 0 auto;
    }

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
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100vw;

    background: #000;
    opacity: 0.8;
    z-index: 4;
  }
`;
