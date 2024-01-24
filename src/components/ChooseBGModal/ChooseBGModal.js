import "./ChooseBGModal.css";
import MyBG from "../MyBG/MyBG.js";

import ChooseBGBarButton from "../../images/MyPage/ChooseBGBarBtn.svg";

function ChooseBGModal({ isChooseBGOpen, closeChooseBGModal }) {
  return (
    <div
      style={{
        display: isChooseBGOpen ? "block" : "none",
      }}
    >
      <div className="ChooseBGToggleOut"></div>
      <div className="ChooseBGToggleBG">
        <div
          className="ChooseBGBarBtn"
          onClick={(e) => {
            e.stopPropagation();
            closeChooseBGModal();
          }}
        >
          <img src={ChooseBGBarButton} alt="ChooseBGBarButton" />
        </div>
        <h3 className="ChooseBG_T">배경 고르기</h3>

        <div className="ChooseBG_C">
          <MyBG backgroundColor="#FBC0A6" />
          <MyBG backgroundColor="#F9B900" />
          <MyBG backgroundColor="#E8B4E3" />
          <MyBG backgroundColor="#9ADBF9" />
          <MyBG backgroundColor="#ABDA6D" />
          <MyBG backgroundColor="#D1C753" />
          <MyBG backgroundColor="#FFD3D3" />
          <MyBG backgroundColor="#6D71DA" />
          <MyBG backgroundColor="#53D1D1" />
        </div>
      </div>
    </div>
  );
}

export default ChooseBGModal;
