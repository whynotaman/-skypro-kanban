import { useState } from "react";
import PopUser from "../PopUser/PopUser.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="../logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="../logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              <button onClick={toggleDropdown}>
                <a href="#user-set-target" className="header__user _hover02">
                  Ivan Ivanov
                </a>
              </button>
              {isOpen && <PopUser />}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
