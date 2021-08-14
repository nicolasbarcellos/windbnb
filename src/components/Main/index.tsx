import { useLocals } from "../../hooks/useLocals";
import { Rooms } from "../../pages/Rooms";
import { Container, RoomsList } from "./style";

export function Main() {
  const { locals, cityToQuery, localsFiltered } = useLocals();

  const localsLength =
    localsFiltered.length > 0
      ? localsFiltered.length
      : cityToQuery && localsFiltered.length === 0
      ? 0
      : locals.length;

  return (
    <>
      <Container>
        <h2>Stays in {cityToQuery || "Finland"}</h2>
        <span>{localsLength}+ stays</span>
      </Container>
      <RoomsList>
        <Rooms />
      </RoomsList>
    </>
  );
}
