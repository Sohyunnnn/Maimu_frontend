import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./LoadingPage.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import GreyMaimu from "../../images/DetailPage/GreyMaimu.svg";
import ThreeBubbles from "../../images/LoadingPage/ThreeBubbles.svg";

const LoadingPage = () => {
  return (
    <div className="LoadingPage">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="LoadingMaimu_Wrapper">
        <div className="ThreeBubbles">
          <img src={ThreeBubbles} alt="ThreeBubbles" />
        </div>
        <div className="GreyMaimu">
          <img src={GreyMaimu} alt="GreyMaimu" />
        </div>
        <p className="CheckTaste_C">마이무 맛 확인 중 ...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
