import React from "react";
import "./MainPage.css";
import Locker from "../../components/Locker/Locker";
import SmallLogoImg from "../../images/SmallLogo.svg";
import ProfileImg from "../../images/Profile.svg";


const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="Header">
        <img className="Profile" src={ProfileImg}/>
        <img className="SmallLogo" src={SmallLogoImg}/>
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
          <button className="EditButton">
            추가
          </button>
          <button className="EditButton">
            편집
          </button>
          <button className="EditButton">
            삭제
          </button>
          
        </div>
        
    </div>
  );
};

export default MainPage;
