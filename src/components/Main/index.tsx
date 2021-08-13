import { useLocals } from "../../hooks/useLocals";
import { Rooms } from "../../pages/Rooms";
import { Container, RoomsList } from "./style";

export function Main() {
  const { locals, cityToQuery, localsFiltered, error } = useLocals();

  return (
    <>
      <Container>
        <h2>Stays in {cityToQuery || "Finland"}</h2>
        <span>{error ? 0 : localsFiltered.length || locals.length}+ stays</span>
      </Container>
      <RoomsList>
        <Rooms />
      </RoomsList>
    </>
  );
}
