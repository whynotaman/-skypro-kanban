import * as S from "./PopExit.styled.js";

export function PopExit() {
  return (
    <>
      <S.PopExitx id="popExit">
        <S.PopExitContainer>
          <S.PopExitBlock>
            <S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
            <S.PopExitForm id="formExit" action="#">
              <S.PopExitFormGroup>
                <S.PopExitYes id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </S.PopExitYes>
                <S.PopExitNo id="exitNo">
                  <a href="main.html">Нет, остаться</a>
                </S.PopExitNo>
              </S.PopExitFormGroup>
            </S.PopExitForm>
          </S.PopExitBlock>
        </S.PopExitContainer>
      </S.PopExitx>
    </>
  );
}

export default PopExit;
