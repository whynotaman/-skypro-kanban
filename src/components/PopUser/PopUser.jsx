import * as S from "./PopUser.styled.js";

function PopUser() {
  return (
    <>
      <S.HeaderPopUserSet id="user-set-target">
        {/* <a href="">x</a> */}
        <S.HeaderPopUserSetName>Ivan Ivanov</S.HeaderPopUserSetName>
        <S.HeaderPopUserSetMail>ivan.ivanov@gmail.com</S.HeaderPopUserSetMail>
        <S.HeaderPopUserSetTheme>
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </S.HeaderPopUserSetTheme>
        <S.HeaderBtnExit type="button">Выйти</S.HeaderBtnExit>
      </S.HeaderPopUserSet>
    </>
  );
}

export default PopUser;
