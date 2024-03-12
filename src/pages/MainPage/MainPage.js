import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImgPomegranate from "../../images/ProfilePomegranate.svg";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import HelpIcon from "../../images/MainPage/HelpIcon.svg";
import InformationModal from "../../components/InformationModal/InformationModal";
import WarningModal from "../../components/WarningModal/WarningModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import api from "../../api/api";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [selectedLockerInfo, setSelectedLockerInfo] = useState(null); // 선택된 사물함의 정보를 저장하는 상태
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [lockers, setLockers] = useState(Array.from({ length: 9 }, () => ({ groupName: "", groupColor: "", group_id: null })));

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchData = async () => {
      if (access_token) {
        try {
          const response = await axios.get(`${api.baseUrl}/v1/api/group/all`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });

          console.log("Backend response:", response.data);

          const newLockers = response.data.data.map((item) => ({
            groupName: item.groupName,
            groupColor: item.groupColor,
            group_id: item.id,
          }));

          // 받아온 데이터를 lockers 배열에 대체
          for (let i = 0; i < newLockers.length; i++) {
            lockers[i] = newLockers[i];
          }

          setLockers([...lockers]);

        } catch (error) {
          console.error("Error fetching data from backend:", error);
          // 오류 처리
        }
      }
    };

    fetchData();
  }, [access_token]);

  const navigate = useNavigate();

  // const checkDuplicateGroupName = (name) => {
  //   return lockers.some((locker) => locker.groupName === name);
  // };

  const addButtonClick = (groupName) => {
    if (lockers.filter((locker) => locker.groupName !== "").length >= 9) {
      toast.error("최대 9개까지 그룹을 생성할 수 있습니다.");
      return;
    }

    // if (checkDuplicateGroupName(groupName)) {
    //   toast.error("이미 존재하는 그룹명입니다.");
    //   return;
    // }

    const emptyLockerIndex = lockers.findIndex((locker) => locker.groupName === "" && locker.groupColor === "");

    if (emptyLockerIndex === -1) {
      toast.error("모든 그룹이 채워져 있습니다.");
      return;
    }

    setClickedButton("add");
    setModalOpen(true);
    setIsEditing(false);
    setIsDeleting(false);
    setSelectedLocker(emptyLockerIndex);
    setSelectedLockerInfo(null);
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

  const onSave = (groupName, groupColor, group_id) => {
    if (clickedButton === "add") {
      const newGroup = {
        groupName: groupName,
        groupColor: groupColor,
        group_id: group_id, 
      };

      const updatedLockers = [...lockers];
      updatedLockers[selectedLocker] = newGroup;

      setLockers(updatedLockers);

    }

    setModalOpen(false);
    setClickedButton(null);
    setIsEditing(false);
    setIsDeleting(false);
    setSelectedLocker(null);
    setSelectedLockerInfo(null);
  };

  const handleLockerClick = (index) => {
    if (lockers[index].groupName !== "" && !isDeleting && !isEditing) {
      const encodedGroupName = encodeURI(lockers[index].groupName);
      const encodedGroupColor = encodeURI(lockers[index].groupColor);
      MoveToDetailPage(encodedGroupName, encodedGroupColor);
    } else if (lockers[index].groupName !== "" && isEditing) {
      setSelectedLocker(index);
      setModalOpen(true);
      setSelectedLockerInfo(lockers[index]);
    } else {
      setSelectedLocker(index);
      setWarningModalOpen(true);
    }
  };

  const handleWarningModalClose = () => {
    setWarningModalOpen(false);
  };

  const handleDelete = async (group_id) => {
    try {
      const response = await axios.delete(`${api.baseUrl}/v1/api/group/${group_id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
  
      console.log("Group deleted:", response.data);
  
      const updatedLockers = lockers.filter((locker) => locker.group_id !== group_id);
      const emptyLocker = {
        groupName: "",
        groupColor: "",
        group_id: null,
      };
  
      if (updatedLockers.length < 9) {
        const numEmptyLockersToAdd = 9 - updatedLockers.length;
        for (let i = 0; i < numEmptyLockersToAdd; i++) {
          updatedLockers.push(emptyLocker);
        }
      }
  
      setLockers(updatedLockers);
      setWarningModalOpen(false);
      setIsDeleting(false);
    } catch (error) {
      console.error("Error deleting group:", error);
      toast.error("그룹을 삭제하는 데 문제가 발생했습니다.");
    }
  };
  
  

  const MoveToMyPage = () => {
    navigate("/MyPage");
  };

  const MoveToDetailPage = (groupName, groupColor) => {
    const encodedGroupName = encodeURI(groupName);
    const encodedGroupColor = encodeURI(groupColor);
    navigate(`/DetailPage/${encodedGroupName}/${encodedGroupColor}`);
  };

  const openInformationModal = () => setIsInformationModalOpen(true);
  const closeInformationModal = () => setIsInformationModalOpen(false);

  return (
    <div className="MainPage">
      <div className="JustifyCenter">
        <ToastContainer />

        <img className="SmallLogo" alt="" src={SmallLogoImg} />

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
            onClick={() => addButtonClick("새 그룹")}
          >
            추가
          </button>
          <button
            className={`EditButton ${clickedButton === "edit" && isEditing ? "clicked" : ""}`}
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
              onClose={() => {
                setModalOpen(false);
                setIsEditing(false);
                setClickedButton(null);
                setSelectedLocker(null);
                setSelectedLockerInfo(null);
              }}
              onSave={onSave}
              clickedButton={clickedButton}
              locker={selectedLockerInfo} // 이 부분을 수정
            />
          )}
        </div>
        <InformationModal
          isInformationOpen={isInformationModalOpen}
          closeInformationModal={closeInformationModal}
          page="MainPage"
        />

        {warningModalOpen && (
          <WarningModal
            onClose={handleWarningModalClose}
            onDelete={() => handleDelete(lockers[selectedLocker].group_id)}
            isDeleting={isDeleting}
            lockers={lockers}
            index={selectedLocker}
          />
        )}

        <img
          className="HelpIcon"
          alt="HelpIcon"
          src={HelpIcon}
          onClick={openInformationModal}
        />

        <img
          className="ProfilePomegranate"
          alt="ProfileButton"
          src={ProfileImgPomegranate}
          onClick={MoveToMyPage}
        />
      </div>
    </div>
  );
};

export default MainPage;
