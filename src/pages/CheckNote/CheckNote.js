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
          <p>안녕!</p>
        </div>
        <div className="Note_C_Wrapper">
          <div className="Note_C">
            너랑 얘기하면 너무 즐거워서 정말로 친해지고 싶다고 생각했어! 우리
            함께 이야기를 나누면서 서로의 이야기를 듣고 공감하며 더욱 가까워질
            수 있을 거야. 나는 너와 함께 시간을 보내는 걸로 충분히 행복해.
            우리가 친구가 되면 함께 많은 것을 할 수 있고, 서로에게 큰 지지가 될
            거야. 우리 반에서 너와 함께할 수 있어서 정말 행운이야! 함께 이
            새로운 여정을 시작해보자! 🌟😊
          </div>
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
