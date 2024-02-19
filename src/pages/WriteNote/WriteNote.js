import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./WriteNote.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import TasteDropdown from "../../components/TasteDropdown/TasteDropdown";

const WriteNote = () => {
  const Note_T_Ref = useRef();
  const Note_C_Ref = useRef();
  const Note_N_Ref = useRef();
  const [inputCountT, setInputCountT] = useState(0);
  const [inputCountC, setInputCountC] = useState(0);
  const [inputCountN, setInputCountN] = useState(0);
  const [tasteSelected, setTasteSelected] = useState(false);

  const navigate = useNavigate();

  const navigateToSendNote = () => {
    if (inputCountT < 1) {
      Note_T_Ref.current.focus(); // 빈칸 있으면 포커싱
      return;
    } else if (inputCountC < 1) {
      Note_C_Ref.current.focus();
      return;
    } else if (inputCountN < 1) {
      Note_N_Ref.current.focus();
      return;
    } else if (!tasteSelected) {
      alert("맛을 선택해주세요!");
      return;
    } else navigate("/SendNote");
  };

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
            ref={Note_T_Ref}
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
            ref={Note_C_Ref}
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
        <TasteDropdown onTasteSelected={setTasteSelected} />
        <div className="NickName_Wrapper">
          <textarea
            className="Note_NickName"
            placeholder="닉네임"
            ref={Note_N_Ref}
            onKeyDown={handleKeyDown}
            onChange={onInputHandler_NickName}
            maxLength="4"
          ></textarea>
          <p className="Count_NickName">
            <span>{inputCountN}/5</span>
          </p>
        </div>
      </div>
      <div className="WriteNote_Button" onClick={navigateToSendNote}>
        쪽지 보내기
      </div>
    </div>
  );
};

export default WriteNote;
