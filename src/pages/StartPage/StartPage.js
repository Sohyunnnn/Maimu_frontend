import React from "react";
import "./StartPage.css";
import Icons from "../../images/Icons.svg";
import KakaoButtonMask from "../../images/KakaoButtonMask.svg";
import { useNavigate } from "react-router-dom";


const StartPage = () => {

  const navigate = useNavigate();
 
  const MoveToMainPage = () => {
    navigate("MainPage");
  };

  return (
    <div className="StartPage">
      <div className="Start">
        <div className="imageContainer">
          <img src={Icons} alt="Icons" className="overlappingImage" />

          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(30%, 200%)",
              borderRadius: 50,
              zIndex: 2,
            }}
          >
            <img
              src={KakaoButtonMask}
              alt="KakaoButtonMask"
              className="buttonWithImage"
            />
          </button>

        </div>

        <div>
          <div className="wallpaper">
            <div className="date_txt">
              <h1>
                3월 4일 이후부터 <br></br>마이무를 건넬 수 있습니다.
              </h1>
              <button onClick={MoveToMainPage}>메인페이지</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
