import { Link } from "react-router-dom";
import * as S from "./Signup.styled.js";

const Signup = () => {
  return (
    <>
      <S.Wrapper>
        <S.ContainerSignup>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLoogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignUpEnt id="SignUpEnter" type="button">
                  Зарегистрироваться
                </S.ModalBtnSignUpEnt>

                <p style={{ color: "red" }}>
                  Пользователь с таким логином уже существует
                </p>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link>Войдите здесь</Link>
                  </p>
                </S.ModalFormGroup>
              </S.ModalFormLoogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignup>
      </S.Wrapper>
    </>
  );
};

export default Signup;
