// Modal.js

import React from 'react';
import "./Modal.css";

const Modal = ({ isOpen, onClose, clickedButton }) => {
  
    if (!isOpen) {
      return null;
    }
  

  let modalTitle, modalContent;

  // clickedButton에 따라 모달 내용을 동적으로 설정
  switch (clickedButton) {
    case 'add':
      modalTitle = '그룹 생성하기';
      break;
    case 'edit':
      modalTitle = '그룹 편집하기';
      break;
    default:

  }

  

  return (
    <div className="ModalContainer" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
      <button className="CloseButton" onClick={onClose}>닫기</button>
        <h1 className='ModalTitle'>{modalTitle}</h1>
        <h1 className='GroupText'>그룹명</h1>
        <div className='GroupName'></div>
        <h1 className='GroupText'>그룹 색상</h1>
        <div className='GroupColor'></div>
        <button className='SaveButton' onClick={onClose}>저장</button>
    
      </div>
    </div>
  );
};

export default Modal;
