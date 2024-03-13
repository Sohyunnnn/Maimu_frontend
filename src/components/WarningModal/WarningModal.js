import React from 'react';
import './WarningModal.css';

const WarningModal = ({ onClose, onDelete, isDeleting, lockers, index, onConfrim }) => {

  return (
    <div className="WarningModal" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
      {isDeleting && lockers[index].groupName !== '' && (
        <p className="ModalMessage">
        삭제할 경우<br /> 안의 쪽지가 사라집니다.<br /> 정말 삭제하시겠습니까?
        </p>
        
        
      )}
      {lockers[index].groupName == '' &&!isDeleting && (
        <p className="EmptyMessage">
        그룹을 추가해주세요
        </p>)}
        {lockers[index].groupName == '' &&isDeleting && (
        <p className="EmptyMessage">
        비어있는 사물함입니다
        </p>)}
  
          {isDeleting && lockers[index].groupName !== '' && (
        <div className="ModalButtons">
          <button className="CloseButton" onClick={onClose}>
            취소
          </button>
          <button className="DeleteButton" onClick={onDelete}>
            삭제
          </button>
        </div>
        )}

        {lockers[index].groupName == '' && (
        <button className="ConfirmButton" onClick={onClose}>
        확인
      </button>)}
      </div>
    </div>
  );
};

export default WarningModal;
