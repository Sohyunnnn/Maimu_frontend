// Modal.js

import React, { useState, useEffect } from "react";
import "./Modal.css";
import ColorDropdown from "../ColorDropdown/ColorDropdown";

const Modal = ({ isOpen, onClose, clickedButton, onSave, locker = {} }) => {
  const [groupName, setGroupName] = useState(locker.groupName || "");  // 초기값 설정
  const [groupColor, setGroupColor] = useState(locker.groupColor || "핑크");  // 초기값 설정

  // locker가 유효하면 groupName과 groupColor 값을 설정합니다.
  useEffect(() => {
    if (locker) {
      const { groupName: lockerGroupName, groupColor: lockerGroupColor } = locker;
      if (lockerGroupName) {
        setGroupName(lockerGroupName);
      }
      if (lockerGroupColor) {
        setGroupColor(lockerGroupColor);
      }
    }
  }, [locker]);

  const handleSave = () => {
    if (!groupName.trim()) {
      alert("그룹명을 입력하세요.");
      return;
    }
    onSave(groupName, groupColor);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  let modalTitle;

  switch (clickedButton) {
    case "add":
      modalTitle = "그룹 추가하기";
      break;
    case "edit":
      modalTitle = "그룹 편집하기";
      break;
    default:
  }

  return (
    <div className="ModalContainer" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <h1 className="ModalTitle">{modalTitle}</h1>
        <h1 className="GroupNameText">그룹명</h1>
        <input
          className="GroupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <h1 className="GroupText">그룹 색상</h1>
        <ColorDropdown
          selectedColor={groupColor}
          onSelectColor={(color) => setGroupColor(color)}
          defaultValue={groupColor}
        />
        <button className="CloseButton" onClick={onClose}>
          취소
        </button>
        <button
          className="SaveButton"
          onClick={handleSave}
          disabled={!groupName.trim()}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default Modal;
