import "./LoginModal.css";

import LoginToggle from "../../images/LoginToggle.svg";
import LoginXButton from "../../images/LoginXButton.svg";

function LoginModal({ isLoginOpen, children, closeLoginModal }) {
  return (
    <div
      style={{
        display: isLoginOpen ? "block" : "none",
      }}
    >
      <div className="LoginToggleOut"></div>
      <div className="LoginToggleBG">
        <div>
          <img src={LoginToggle} alt="LoginToggle" />
          <div className="LoginXbtn" onClick={closeLoginModal}>
            <img src={LoginXButton} alt="LoginXButton" />
          </div>
          <div className="KakaoLogin">카카오로 로그인하기</div>
          <div className="NaverLogin">네이버로 로그인하기</div>
          <div className="GoogleLogin">구글로 로그인하기</div>
          <div className="TermsOfUse">
            계속 진행하면 마이무 서비스 이용약관에 동의하고 개인정보 처리방침을
            읽었음을 인정하는 것으로 간주됩니다.
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LoginModal;
