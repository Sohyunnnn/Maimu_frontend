import React from 'react';
import './WarningModal.css';

const WarningModalModal = ({ onClose, onDelete }) => {

  return (
    <div className="WarningModal" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <h1 className="ModalTitle"></h1>
        <p className="ModalMessage">삭제할 경우<br/> 안의 쪽지가 사라집니다.<br/> 정말 삭제하시겠습니까?</p>
        <div className="ModalButtons">
          <button className="CloseButton" onClick={onClose}>
            취소
          </button>
          <button className="DeleteButton" onClick={onDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModalModal;
