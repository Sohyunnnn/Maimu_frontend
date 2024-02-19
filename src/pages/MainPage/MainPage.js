// MainPage.js
import React, { useState } from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImg from "../../images/Profile.svg";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import HelpIcon from "../../images/MainPage/HelpIcon.svg";
import InformationModal from "../../components/InformationModal/InformationModal";
import WarningModal from "../../components/WarningModal/WarningModal";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [warningModalOpen, setWarningModalOpen] = useState(false);

  const [lockers, setLockers] = useState([
    { groupName: 'Group 1', groupColor: '초록' },
    { groupName: 'Group 2', groupColor: '핑크' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
    { groupName: '', groupColor: '' },
  ]);
  const navigate = useNavigate();

  const findEmptyLockerIndex = () => {
    return lockers.findIndex(locker => locker.groupName === '' && locker.groupColor === '');
  };

  const addButtonClick = () => {
    const emptyLockerIndex = findEmptyLockerIndex();
    if (emptyLockerIndex === -1) {
      alert('모든 그룹이 채워져 있습니다.');
      return;
    }
    setClickedButton(emptyLockerIndex);
    setClickedButton('add');
    setModalOpen(true);
    setIsEditing(false);
    setIsDeleting(false);
  };
  
  
  const editButtonClick = () => {
    setClickedButton('edit');
    // setModalOpen(true);
    // setIsEditing(true);
    setIsDeleting(false);
    setIsEditing(prevEditing => !prevEditing);
  };
  
  const delButtonClick = () => {
    setClickedButton('delete');
    setIsDeleting(prevDeleting => !prevDeleting);
    setIsEditing(false);

  };

  const onSave = (groupName, groupColor) => {
    const emptyLockerIndex = findEmptyLockerIndex();
    if (emptyLockerIndex !== -1) {
      const updatedLockers = [...lockers];
      updatedLockers[emptyLockerIndex] = { groupName, groupColor };
      setLockers(updatedLockers);
    }
    setModalOpen(false);
    setClickedButton(null);
    setIsEditing(false);
    setIsDeleting(false);
  };

  const handleLockerClick = (index) => {
    if (isDeleting && lockers[index].groupName !== '') {
      setSelectedLocker(index);
      setWarningModalOpen(true); // WarningModal을 열도록 상태 업데이트
    }
  };

  const handleWarningModalClose = () => {
    setWarningModalOpen(false); // WarningModal을 닫도록 상태 업데이트
  };

  const handleDelete = () => {
    // 사물함 삭제
    const updatedLockers = [...lockers];
    updatedLockers[selectedLocker].groupName = '';
    updatedLockers[selectedLocker].groupColor = '';
  
    // 삭제된 사물함 이후의 모든 사물함을 한 칸씩 앞으로 이동
  for (let i = selectedLocker + 1; i < updatedLockers.length; i++) {
    updatedLockers[i - 1] = updatedLockers[i];
  }

  
    setLockers(updatedLockers);
    setWarningModalOpen(false); // WarningModal을 닫도록 상태 업데이트
    setIsDeleting(false)
  };

  const MoveToMyPage =() => {
    navigate("/MyPage");
  };

  const openInformationModal = () => setIsInformationModalOpen(true);
  const closeInformationModal = () => setIsInformationModalOpen(false);

  return (
    <div className="MainPage">
      <div className="Header">
        <img className="HelpIcon" alt="HelpIcon" src={HelpIcon} onClick={openInformationModal}/>
        <img className="SmallLogo" alt="" src={SmallLogoImg}/>
        <img className="Profile" alt="ProfileButton" src={ProfileImg} onClick={MoveToMyPage}/>
      </div>
      
      <div className="LockerContainer" >
        {/* Lockers 리스트를 매핑하여 각 Locker에 데이터를 전달합니다. */}
        {lockers.map((locker, index) => (
          <Locker 
            key={index} 
            GroupName={locker.groupName} 
            groupColor={locker.groupColor} 
            isEditing={isEditing} 
            isDeleting={isDeleting}
            onClick={() => handleLockerClick(index)} // 사물함을 클릭했을 때의 핸들러 추가
          />
        ))}
      </div>

      <div className="EditGroup">
        <button className={`EditButton ${clickedButton === 'add' ? 'clicked' : ''}`} onClick={addButtonClick}>
          추가
        </button>
        <button className={`EditButton ${clickedButton === 'edit' && isEditing ? 'clicked' : ''}`} onClick={editButtonClick}>
          편집
        </button>
        <button className={`EditButton ${clickedButton === 'delete' && isDeleting ? 'clicked' : ''}`} onClick={delButtonClick}>
          삭제
        </button>

        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            clickedButton={clickedButton}
            onSave={onSave}
            onClose={() => {
              setModalOpen(false);
              setClickedButton(null);
            }}
          />
        )}
      </div>
      <InformationModal
          isInformationOpen={isInformationModalOpen}
          closeInformationModal={closeInformationModal}
        />

        {/* 삭제를 확인하는 경우에만 WarningModal을 표시합니다. */}
      {warningModalOpen && (
        <WarningModal 
          onClose={handleWarningModalClose} 
          onDelete={handleDelete} 
        />
      )}
        
    </div>
  );
};

export default MainPage;
