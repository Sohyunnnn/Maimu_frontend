import React from "react";
import "./MainPage.css";
import Icons from "../../images/Icons.svg";
import KakaoButtonMask from "../../images/KakaoButtonMask.svg";
// import MainLogo from "../../images/MainLogo.svg";
// import BlackBoard from "../../images/BlackBoard.svg";
// import WallPaper from "../../images/WallPaper.svg";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="Main">
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

          {/* <img src={WallPaper} alt="WallPaper" className="overlappingImage" />
          <img src={BlackBoard} alt="BlackBoard" className="overlappingImage" />
          <img src={MainLogo} alt="Main Logo" className="overlappingImage" /> */}
        </div>

        <div>
          <div className="wallpaper">
            <div className="date_txt">
              <h1>
                3월 4일 이후부터 <br></br>마이무를 건넬 수 있습니다.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
