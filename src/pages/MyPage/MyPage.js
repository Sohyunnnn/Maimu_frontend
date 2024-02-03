import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MyPage.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import EditButton from "../../images/MyPage/EditButton.svg";
import BirthSelect from "../../components/BirthSelect/BirthSelect";
import ProfileCitron from "../../images/ProfileCitron.svg";
import ProfilePomegranate from "../../images/ProfilePomegranate.svg";
import ProfilePlum from "../../images/ProfilePlum.svg";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleConfirmClick = () => {
    navigate("/MainPage");
  };

  const getProfileImage = (iconName) => {
    switch (iconName) {
      case "유자":
        return { image: ProfileCitron, backgroundClass: "CitronBackground"};
      case "매실":
        return { image: ProfilePlum, backgroundClass: "PlumBackground" };
      case "석류":
        return { image: ProfilePomegranate, backgroundClass: "PomegranateBackground" };
      default:
        return null;
    }
  };

  const focusedIcon = location.state?.focusedIcon;
  const profileInfo = getProfileImage(focusedIcon);

  return (
    <div className={`MyPage ${profileInfo?.backgroundClass}`}>
      <div className="AlignCenter">
        <img className="SmallLogoImg" src={SmallLogoImg} alt="SmallLogo" />
        <img className="ProfileImage" src={profileInfo?.image} alt={focusedIcon} />
        <img className="ProfileEditButon" src={EditButton} alt="ProfileEditButon" />
        <div className="Nickname">
          닉네임
          <input className="NicknameInput" />
        </div>
        <div className="Birth">
          생일
          <BirthSelect />
        </div>
        <button className="Confirmation" onClick={handleConfirmClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default MyPage;
