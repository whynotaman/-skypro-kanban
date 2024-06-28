import Card from "../Card/Card.jsx";
import * as S from "./Column.styled.js";

function Column({ status, cards }) {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>
          <p>{status}</p>
        </S.ColumnTitle>
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </S.MainColumn>
    </>
  );
}

export default Column;
