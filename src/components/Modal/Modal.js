import React, { useState } from 'react';
import './Modal.css';
import ColorDropdown from '../ColorDropdown/ColorDropdown';

const Modal = ({ isOpen, onClose, clickedButton }) => {

  const handleSave = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  let modalTitle;

  switch (clickedButton) {
    case 'add':
      modalTitle = '그룹 추가하기';
      break;
    case 'edit':
      modalTitle = '그룹 편집하기';
      break;
    default:
  }

  return (
    <div className="ModalContainer" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <h1 className="ModalTitle">{modalTitle}</h1>
        <h1 className="GroupNameText">그룹명</h1>
        <input className="GroupName" />
        <h1 className="GroupText">그룹 색상</h1>

        <ColorDropdown />
        
          <button className="CloseButton" onClick={onClose}>
            취소
          </button>
          <button className="SaveButton" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>
  );
};

export default Modal;
