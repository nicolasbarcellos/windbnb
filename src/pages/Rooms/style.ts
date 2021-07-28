import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  column-gap: 4rem;
  row-gap: 5rem;

  img {
    width: 100%;
    height: 269px;
    object-fit: cover;
    border-radius: 2.4rem;
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
