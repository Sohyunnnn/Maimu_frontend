import React, { useState, useEffect } from "react";
import "./Modal.css";
import ColorDropdown from "../ColorDropdown/ColorDropdown";
import api from "../../api/api";
import axios from "axios";

const Modal = ({ isOpen, onClose, clickedButton, onSave, locker }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("핑크");

  const access_token = localStorage.getItem("access_token");

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


  const handleSave = async () => {
    if (!groupName.trim()) {
      alert("그룹명을 입력하세요.");
      return;
    }
  
    // clickedButton 값에 따라 onSave 함수 호출
    switch (clickedButton) {
      case "add":
        try{
        const response = await axios.post(
          `${api.baseUrl}/v1/api/group`,
          {
            groupName: groupName,
            groupColor: groupColor
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`
            },
          }
        );
  
        console.log("New group added:", response.data);
        }
        catch (error) {
          console.error('group not added', error);
        }

        window.location.reload();
        break;
      case "edit":

          // onSave(groupName, groupColor); 
        break;

      default:
        break;
    }
  
    onClose(); // 모달 닫기
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
