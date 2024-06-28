import { useEffect, useState } from "react";
import Column from "../Column/Column.jsx";
import * as S from "./Main.styled.js";
import { Container } from "../Common/common.styles.js";
import { statusList } from "../../lib/data.js";

function Main({ cards }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 200);
  }, []);
  return (
    <>
      {isLoading ? (
        <S.Main>
          <Container>
            <S.MainBlock>
              <S.MainContent>
                {statusList.map((status) => (
                  <Column
                    status={status}
                    key={status}
                    cards={cards.filter((card) => card.status === status)}
                  />
                ))}
              </S.MainContent>
            </S.MainBlock>
          </Container>
        </S.Main>
      ) : (
        <p>Данные загружаются</p>
      )}
    </>
  );
}

export default Main;
