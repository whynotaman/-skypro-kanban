import Card from "../Card/Card.jsx";

function Column({ status, cards }) {
  return (
    <>
      <div className="main__column">
        <div className="column__title">
          <p>{status}</p>
        </div>
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </>
  );
}

export default Column;
