import { statusList } from "../../data.js";
import Card from "../Card/Card.jsx";

function Column() {
  return (
    <>
      {statusList.map((status) => (
        <div className="column__title" key={status}>
          <div className="main__column column">
            <p>{status}</p>
          </div>
          <Card />
        </div>
      ))}
    </>
  );
}

export default Column;
