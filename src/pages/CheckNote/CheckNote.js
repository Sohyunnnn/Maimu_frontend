import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./CheckNote.css";
import SmallLogoImg from "../../images/SmallLogo.svg";

const CheckNote = () => {
  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("/DetailPage");
  };

  return (
    <div className="CheckNote">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="CheckNote_Box">
        <div>
          <p className="CheckNote_T">쪽지 내용</p>
        </div>
        <div className="Note_T_Wrapper">
          <p>안녕</p>
        </div>
        <div className="Note_C_Wrapper">
          <p>안녕! 친해지고 싶어 &gt;_0!!</p>
        </div>
        <div className="Note_Date">
          <p>2024년 1월 23일(화) 오전 11: 43</p>
        </div>
        <div className="Note_NickName_Wrapper">
          <p>마이무</p>
        </div>
      </div>
      <button className="CheckNote_Button" onClick={navigateToDetailPage}>
        사물함으로 돌아가기
      </button>
    </div>
  );
};

export default CheckNote;
