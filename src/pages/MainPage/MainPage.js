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
  const [selectedLockerInfo, setSelectedLockerInfo] = useState(null); // 선택된 사물함의 정보를 저장하는 상태 추가
  const [warningModalOpen, setWarningModalOpen] = useState(false);

  const [lockers, setLockers] = useState([
    { groupName: "Group 1", groupColor: "초록" },
    { groupName: "Group 2", groupColor: "핑크" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
    { groupName: "", groupColor: "" },
  ]);
  const navigate = useNavigate();

  const findEmptyLockerIndex = () => {
    return lockers.findIndex(
      (locker) => locker.groupName === "" && locker.groupColor === ""
    );
  };

  const addButtonClick = () => {
    const emptyLockerIndex = findEmptyLockerIndex();
    if (emptyLockerIndex === -1) {
      alert("모든 그룹이 채워져 있습니다.");
      return;
    }
    setClickedButton(emptyLockerIndex);
    setClickedButton("add");
    setModalOpen(true);
    setIsEditing(false);
    setIsDeleting(false);
  };

  const editButtonClick = () => {
    setClickedButton("edit");
    setIsDeleting(false);
    setIsEditing((prevEditing) => !prevEditing);
  };

  const delButtonClick = () => {
    setClickedButton("delete");
    setIsDeleting((prevDeleting) => !prevDeleting);
    setIsEditing(false);
  };

  // const onSave = (groupName, groupColor, lockerToUpdate) => {
  //   if (clickedButton === "add") {
  //     const emptyLockerIndex = findEmptyLockerIndex();
  //     if (emptyLockerIndex !== -1) {
  //       const updatedLockers = [...lockers];
  //       updatedLockers[emptyLockerIndex] = { groupName, groupColor };
  //       setLockers(updatedLockers);
  //     }
  //   } else if (clickedButton === "edit" && lockerToUpdate) {
  //     const updatedLockers = lockers.map((locker, index) => {
  //       if (index === lockerToUpdate.index) {
  //         return { groupName, groupColor };
  //       }
  //       return locker;
  //     });
  //     setLockers(updatedLockers);
  //   }
  
  //   setModalOpen(false);
  //   setClickedButton(null);
  //   setIsEditing(false);
  //   setIsDeleting(false);
  //   setSelectedLocker(null);
  //   setSelectedLockerInfo(null);
  // };


  const onSave = (groupName, groupColor) => {
    const updatedLockers = [...lockers];
    if (clickedButton === "add") {
      const emptyLockerIndex = findEmptyLockerIndex();
      if (emptyLockerIndex !== -1) {
        updatedLockers[emptyLockerIndex] = { groupName, groupColor };
      }
    } else if (clickedButton === "edit" && selectedLocker !== null) {
      updatedLockers[selectedLocker] = { groupName, groupColor };
    }
    
    setLockers(updatedLockers);
    setModalOpen(false);
    setClickedButton(null);
    setIsEditing(false);
    setIsDeleting(false);
    setSelectedLocker(null);
    setSelectedLockerInfo(null);
  };

  
  const handleLockerClick = (index) => {
    if (lockers[index].groupName !== "" && !isDeleting && !isEditing) {
      MoveToDetailPage();
    } else if (lockers[index].groupName !== "" && isEditing) {
      setSelectedLocker(index);
      setModalOpen(true);
      setSelectedLockerInfo(lockers[index]); // 선택된 사물함의 정보를 Modal 열기 전에 선택된 정보만 업데이트
    } else {
      setSelectedLocker(index);
      setWarningModalOpen(true);
    }
  };

  const handleWarningModalClose = () => {
    setWarningModalOpen(false);
  };

  const handleDelete = () => {
    const updatedLockers = [...lockers];
    updatedLockers[selectedLocker].groupName = "";
    updatedLockers[selectedLocker].groupColor = "";

    for (let i = selectedLocker + 1; i < updatedLockers.length; i++) {
      updatedLockers[i - 1] = updatedLockers[i];
    }

    setLockers(updatedLockers);
    setWarningModalOpen(false);
    setIsDeleting(false);
  };

  const MoveToMyPage = () => {
    navigate("/MyPage");
  };

  const MoveToDetailPage = () => {
    navigate("/DetailPage");
  };

  const openInformationModal = () => setIsInformationModalOpen(true);
  const closeInformationModal = () => setIsInformationModalOpen(false);

  return (
    <div className="MainPage">
      <div className="Header">
        <img
          className="HelpIcon"
          alt="HelpIcon"
          src={HelpIcon}
          onClick={openInformationModal}
        />
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
        <img
          className="Profile"
          alt="ProfileButton"
          src={ProfileImg}
          onClick={MoveToMyPage}
        />
      </div>

      <div className="LockerContainer">
        {lockers.map((locker, index) => (
          <Locker
            key={index}
            GroupName={locker.groupName}
            groupColor={locker.groupColor}
            isEditing={isEditing}
            isDeleting={isDeleting}
            onClick={() => handleLockerClick(index)}
          />
        ))}
      </div>

      <div className="EditGroup">
        <button
          className={`EditButton ${clickedButton === "add" ? "clicked" : ""}`}
          onClick={addButtonClick}
        >
          추가
        </button>
        <button
          className={`EditButton ${
            clickedButton === "edit" && isEditing ? "clicked" : ""
          }`}
          onClick={editButtonClick}
        >
          편집
        </button>
        <button
          className={`EditButton ${
            clickedButton === "delete" && isDeleting ? "clicked" : ""
          }`}
          onClick={delButtonClick}
        >
          삭제
        </button>

        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            clickedButton={clickedButton}
            onSave={onSave}
            onClose={() => {
              setModalOpen(false);
              setIsEditing(false);
              setClickedButton(null);
              setSelectedLocker(null);
              setSelectedLockerInfo(null);
            }}
            locker={selectedLockerInfo} // Modal에 선택된 사물함의 정보를 전달
          />
        )}
      </div>
      <InformationModal
        isInformationOpen={isInformationModalOpen}
        closeInformationModal={closeInformationModal}
      />

      {warningModalOpen && (
        <WarningModal
          onClose={handleWarningModalClose}
          onDelete={handleDelete}
          isDeleting={isDeleting}
          lockers={lockers}
          index={selectedLocker}
        />
      )}
    </div>
  );
};

export default MainPage;
