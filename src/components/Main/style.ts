import styled from "styled-components";

export const Container = styled.main`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;

    color: var(--gray);
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
  }
`

export const RoomsList = styled.div`
  padding-bottom: 4rem;
`