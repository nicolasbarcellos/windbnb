import { useLocals } from "../../hooks/useLocals";
import { Rooms } from "../../pages/Rooms";
import { Container, RoomsList } from "./style";

export function Main() {
  const { locals, newLocals } = useLocals();
  const localsQty = newLocals.length === 0 ? locals : newLocals;

  console.log(newLocals);

  return (
    <>
      <Container>
        <h2>Stays in {newLocals.length > 0 ? newLocals[0].city : "Finland"}</h2>
        <span>{localsQty.length}+ stays</span>
      </Container>
      <RoomsList>
        <Rooms />
      </RoomsList>
    </>
  );
}
