import React, { useState } from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImg from "../../images/Profile.svg";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import HelpIcon from "../../images/MainPage/HelpIcon.svg";
import InformationModal from "../../components/InformationModal/InformationModal";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

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
  };
  
  
  const editButtonClick = () => {
    setClickedButton('edit');
    setModalOpen(true);
  };
  
  const delButtonClick = () => {
    setClickedButton('delete');
    setModalOpen(true);
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
      
      <div className="Locker">
        {/* Lockers 리스트를 매핑하여 각 Locker에 데이터를 전달합니다. */}
        {lockers.map((locker, index) => (
          <Locker key={index} GroupName={locker.groupName} groupColor={locker.groupColor} />
        ))}
      </div>

      <div className="EditGroup">
        <button className={`EditButton ${clickedButton === 'add' ? 'clicked' : ''}`} onClick={addButtonClick}>
          추가
        </button>
        <button className={`EditButton ${clickedButton === 'edit' ? 'clicked' : ''}`} onClick={editButtonClick}>
          편집
        </button>
        <button className={`EditButton ${clickedButton === 'delete' ? 'clicked' : ''}`} onClick={delButtonClick}>
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
        
    </div>
  );
};

export default MainPage;
