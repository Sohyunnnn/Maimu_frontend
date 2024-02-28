import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./LoadingPage.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import GreyMaimu from "../../images/DetailPage/GreyMaimu.svg";
import ThreeBubbles from "../../images/LoadingPage/ThreeBubbles.svg";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/CheckTaste"); // CheckTaste 페이지로 이동
    }, 2000); // 2초 후에 이동

    return () => clearTimeout(timer); // 타이머 해제
  }, [navigate]);

  return (
    <div className="LoadingPage">
      <div className="JustifyCenter">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      <div className="LoadingMaimu_Wrapper">
        <div className="ThreeBubbles">
          <img src={ThreeBubbles} alt="ThreeBubbles" />
        </div>
          <img className="GreyMaimu" src={GreyMaimu} alt="GreyMaimu" />
        <p className="CheckTaste_C">마이무 맛 확인 중 ...</p>
      </div>
      </div>
    </div>
  );
};

export default LoadingPage;
