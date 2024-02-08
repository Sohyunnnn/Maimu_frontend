import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./CheckTaste.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import SixBubbles_P from "../../images/CheckTaste/SixBubbles_P.svg";
import Pomegranate from "../../images/ProfileEdit/Pomegranate.svg";
import SpeechBubble from "../../images/CheckTaste/SpeechBubble.svg";
import Progressbar_P from "../../images/CheckTaste/Progressbar_P.svg";

const CheckTaste = () => {
  return (
    <div className="CheckTaste">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="CheckTaste_Wrapper">
        <p className="Sugar_C">우리 사이 당도...</p>
        <div className="SixBubbles_P">
          <img src={SixBubbles_P} alt="SixBubbles_P" />
          <div className="Pomegranate">
            <img src={Pomegranate} alt="Pomegranate" />
          </div>
          <div className="SpeechBubble">
            <img src={SpeechBubble} alt="SpeechBubble" />
          </div>
        </div>
        <div className="Progressbar_P">
          <img src={Progressbar_P} alt="Progressbar_P" />
        </div>
        <p className="Percent">32%</p>
        <button className="CheckNote">쪽지 확인하러 가기</button>
      </div>
    </div>
  );
};

export default CheckTaste;
