import { useState } from "react";
import PopUser from "../PopUser/PopUser.jsx";
import * as S from "./Header.styled.js";
import { Container } from "../Common/common.styles.js";

function Header({ addNewCard }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Header>
        <Container>
          <S.HeaderBlock>
            <S.HeaderLogo>
              <a href="#" target="_self">
                <img src="../../logo.png" alt="logo" />
              </a>
            </S.HeaderLogo>
            <div className="header__logo _dark">
              <a href="#" target="_self">
                <img src="../../logo_dark.png" alt="logo" />
              </a>
            </div>
            <S.HeaderNav>
              <S.HeaderBtn id="btnMainNew" onClick={addNewCard}>
                <a href="#">Создать новую задачу</a>
              </S.HeaderBtn>
              <S.HeaderUser onClick={() => setIsOpen((isOpen) => !isOpen)}>
                Ivan Ivanov
              </S.HeaderUser>
              {isOpen && <PopUser />}
            </S.HeaderNav>
          </S.HeaderBlock>
        </Container>
      </S.Header>
    </>
  );
}

export default Header;
