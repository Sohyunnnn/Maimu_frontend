import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SendNote.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ShareButton from "../../images/SendNote/ShareButton.svg";

const SendNote = () => {
  const navigate = useNavigate();

  const navigateToStartPage = () => {
    navigate("/");
  };

  const navigateToDetailPage = () => {
    navigate("/DetailPage");
  };

  return (
    <div className="SendNote">
      <div className="Header">
        <img className="SmallLogo" alt="ShareButton" src={SmallLogoImg} />
      </div>
      <div className="GroupName">그룹 이름</div>
      <div className="ShareButton_Wrapper">
        <img className="ShareButton" alt="ShareButton" src={ShareButton} />
      </div>
      <p className="SendNote_MSG">
        쪽지가 성공적으로 <br />
        전송되었습니다
      </p>
      <div className="SendNote_Button" onClick={navigateToDetailPage}>
        확인
      </div>
      <div className="ToStartPage_Button" onClick={navigateToStartPage}>
        나도 마이무 받으러 가기
      </div>
    </div>
  );
};

export default SendNote;
