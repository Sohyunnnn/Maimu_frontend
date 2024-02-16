import React, { useState } from 'react';
import './Modal.css';
import ColorDropdown from '../ColorDropdown/ColorDropdown';

const Modal = ({ isOpen, onClose, clickedButton, onSave }) => {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('노랑');

  const handleSave = () => {
    if (!groupName.trim()) {
      alert('그룹명을 입력하세요.');
      return; // 그룹명이 비어 있으면 저장하지 않고 함수를 종료합니다.
    }
    console.log('Saving group:', groupName);
    console.log('Selected color:', groupColor);
    onSave(groupName, groupColor);
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
        <button className="SaveButton" onClick={handleSave} disabled={!groupName.trim()}>
          저장
        </button>
      </div>
    </div>
  );
};

export default Modal;
