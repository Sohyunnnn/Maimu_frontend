import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./WriteNote.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import TasteDropdown from "../../components/TasteDropdown/TasteDropdown";

const WriteNote = () => {
  let [inputCountT, setInputCountT] = useState(0);
  let [inputCountC, setInputCountC] = useState(0);
  let [inputCountN, setInputCountN] = useState(0);
  const navigate = useNavigate();

  // const navigateToDetailPage = () => {
  //   navigate("/DetailPage");
  // }; 작성 완료 페이지로

  const onInputHandler_Note_T = (e) => {
    setInputCountT(e.target.value.length);
  };
  const onInputHandler_Note_C = (e) => {
    setInputCountC(e.target.value.length);
  };
  const onInputHandler_NickName = (e) => {
    setInputCountN(e.target.value.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 동작 막기
    }
  };

  return (
    <div className="WriteNote">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
      </div>
      <div className="WriteNote_Box">
        <div>
          <p className="WriteNote_T">쪽지 쓰기</p>
        </div>
        <div className="Note_T_Wrapper">
          <textarea
            className="Note_T"
            placeholder="제목 입력"
            onKeyDown={handleKeyDown}
            onChange={onInputHandler_Note_T}
            maxLength="14"
          ></textarea>
          <p className="Count_Note_T">
            <span>{inputCountT}/15</span>
          </p>
        </div>
        <div className="Note_C_Wrapper">
          <textarea
            className="Note_C"
            placeholder="내용을 입력하세요"
            onKeyDown={handleKeyDown}
            onChange={onInputHandler_Note_C}
            maxLength="199"
          ></textarea>
          <p className="Count_Note_C">
            <span>{inputCountC}/200</span>
          </p>
        </div>
      </div>
      <div className="Note_Info_Wrapper">
        <TasteDropdown />
        <div className="NickName_Wrapper">
          <textarea
            className="Note_NickName"
            placeholder="닉네임"
            onKeyDown={handleKeyDown}
            onChange={onInputHandler_NickName}
            maxLength="4"
          ></textarea>
          <p className="Count_NickName">
            <span>{inputCountN}/5</span>
          </p>
        </div>
      </div>
      <div className="WriteNote_Button">쪽지 보내기</div>
    </div>
  );
};

export default WriteNote;
