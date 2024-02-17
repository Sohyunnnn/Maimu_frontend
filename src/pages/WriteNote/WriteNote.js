import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./WriteNote.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import TasteDropdown from "../../components/TasteDropdown/TasteDropdown";

const WriteNote = () => {
  const navigate = useNavigate();

  // const navigateToDetailPage = () => {
  //   navigate("/DetailPage");
  // }; 작성 완료 페이지로

  return (
    <div className="WriteNote">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="WriteNote_Box">
        <div>
          <p className="WriteNote_T">쪽지 쓰기</p>
        </div>
        <textarea className="Note_T" placeholder="제목 입력"></textarea>
        <textarea className="Note_C" placeholder="내용을 입력하세요"></textarea>
      </div>
      <div className="Note_Info_Wrapper">
        <TasteDropdown />
        <textarea className="Note_NickName" placeholder="닉네임"></textarea>
      </div>
      <div className="WriteNote_Button">쪽지 보내기</div>
    </div>
  );
};

export default WriteNote;
