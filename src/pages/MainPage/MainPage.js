import React from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImg from "../../images/Profile.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal"


const MainPage = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  
  const navigate = useNavigate();


  const addButtonClick = () => {
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


const MoveToMyPage =() => {
  navigate("/MyPage");
};

  return (
    <div className="MainPage">
      <div className="Header">
        <img className="Profile" alt="ProfileButton" src={ProfileImg} onClick={MoveToMyPage}/>
        <img className="SmallLogo" alt="" src={SmallLogoImg}/>
      </div>
      
      <div className="Locker">
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
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
            isOpen={modalOpen} // isOpen 속성을 modalOpen 상태로 전달
            clickedButton={clickedButton}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
        
    </div>
  );
};


export default MainPage;
