import { Link } from "react-router-dom";
import * as S from "./Signin.styled.js";

const Signin = () => {
  return (
    <>
      <S.Wrapper>
        <S.ContainerSignin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Вход</h2>
              </S.ModalTitle>
              <S.ModalFormLogin>
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter">Войти</S.ModalBtnEnter>
                <S.ModalFormGrop>
                  <p style={{ color: "red" }}>
                    Не правильно ввел логин и пароль
                  </p>
                  <p>Нужно зарегистрироваться?</p>
                  <Link>Зарегистрируйися здесь</Link>
                </S.ModalFormGrop>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignin>
      </S.Wrapper>
    </>
  );
};

export default Signin;
