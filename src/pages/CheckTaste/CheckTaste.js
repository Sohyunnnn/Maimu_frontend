import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./CheckTaste.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import Taste_Pink from "../../images/CheckTaste/Taste_Pink.svg";

const CheckTaste = () => {
  const navigate = useNavigate();

  const navigateToCheckNote = () => {
    navigate("/CheckNote");
  };

  return (
    <div className="CheckTaste">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="CheckTaste_Wrapper">
        <p className="Sugar_T">우리 사이 당도...</p>
        <div className="Taste_Pink">
          <img src={Taste_Pink} alt="Taste_Pink" />
        </div>
        <p className="Percent">32%</p>
        <button className="CheckTaste_Button" onClick={navigateToCheckNote}>
          쪽지 확인하러 가기
        </button>
      </div>
    </div>
  );
};

export default CheckTaste;
