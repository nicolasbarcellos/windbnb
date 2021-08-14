import { useLocals } from "../../hooks/useLocals";
import { Container } from "./style";
import { AiFillStar } from "react-icons/ai";

export function Rooms(): JSX.Element {
  const { locals, localsFiltered, cityToQuery, searchSucess } = useLocals();

  const data = localsFiltered.length > 0 ? localsFiltered : locals;

  const dataNotFound =
    searchSucess && cityToQuery && localsFiltered.length === 0;

  return (
    <Container>
      {dataNotFound ? (
        <h1>Não encontrado</h1>
      ) : (
        data?.map((local) => {
          return (
            <li key={local.id}>
              <div className='imgWrapper'>
                <img src={local.photo} alt={local.title} />
              </div>
              <div>
                {local.superHost && (
                  <span className="super-host">Super Host</span>
                )}
                <span className="local-type">
                  {local.beds && (
                    <span>
                      {local.type}, {local.beds}{" "}
                      {local.beds > 1 ? "beds" : "bed"}
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
        })
      )}
    </Container>
  );
}
