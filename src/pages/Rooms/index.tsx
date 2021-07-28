import { useLocals } from "../../hooks/useLocals";
import { Container } from "./style";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

export function Rooms(): JSX.Element {
  const { locals, newLocals } = useLocals();
  
  const data = newLocals.length === 0 ? locals : newLocals;

  return (
    <Container>
      {data.map((local) => {
        return (
          <li key={local.id}>
            <img src={local.photo} alt={local.title} />
            <div>
              {local.superHost && (
                <span className="super-host">Super Host</span>
              )}
              <span className="local-type">
                {local.beds && (
                  <span>
                    {local.type}, {local.beds} {local.beds > 1 ? "beds" : "bed"}
                  </span>
                )}
              </span>
              <div>
                <AiFillStar color="#EB5757" size="16" />
                <span>{local.rating}</span>
              </div>
            </div>

            <h3>{local.title}</h3>
          </li>
        );
      })}
    </Container>
  );

}
