import { useEffect, useState } from "react";
import { statusList } from "../../data.js";
import Column from "../Column/Column.jsx";

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
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {statusList.map((status) => (
                  <Column
                    status={status}
                    key={status}
                    cards={cards.filter((card) => card.status === status)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <p>Данные загружаются</p>
      )}
    </>
  );
}

export default Main;
