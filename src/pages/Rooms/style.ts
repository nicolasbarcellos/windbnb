import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  column-gap: 4rem;
  row-gap: 5rem;

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
  }

  li {

    @media (max-width: 830px) {
      grid-template-columns: 1fr;
      grid-column: 1 / -1;
    }
  }

  .imgWrapper {
    overflow: hidden;
    border-radius: 2.4rem;

    img {
      height: 269px;
      object-fit: cover;
   
      width: 100%;
      transform: scale(1);
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  .super-host {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;

    padding: 0.5rem 0.7rem;

    border-radius: 1.2rem;
    border: 1px solid currentColor;
    color: var(--gray-medium);
  }

  .local-type {
    font-weight: 500;

    color: var(--gray-light);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 600;

    color: var(--gray);
  }

  span {
    font-size: 1.4rem;
  }
`;
