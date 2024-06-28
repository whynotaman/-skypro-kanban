import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopExit from "./components/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import { cardList } from "./data.js";

function App() {
  const [cards, setCards] = useState(cardList);
  const addNewCard = () => setCards([...cards, newCard]);
  const newCard = {
    id: 6,
    topic: "Web Design",
    title: "Название задачи",
    date: "05.04.24",
    status: "Без статуса",
  };
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header addNewCard={addNewCard} />
        <Main cards={cards} />
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
