import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MyPage.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import EditButton from "../../images/MyPage/EditButton.svg";
import BirthSelect from "../../components/BirthSelect/BirthSelect";
import ProfileCitron from "../../images/ProfileCitron.svg";
import ProfilePomegranate from "../../images/ProfilePomegranate.svg";
import ProfilePlum from "../../images/ProfilePlum.svg";
import axios from 'axios'; 

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleConfirmClick = async () => {
    const profileData = {
      maimuName: nickname,
      year: selectedYear?.value,
      month: selectedMonth?.value,
      date: selectedDay?.value,
      maimuProfile: location.state?.focusedIcon
    };

    try {
      const response = await axios.post('http://ec2-52-79-129-227.ap-northeast-2.compute.amazonaws.com:8080/v1/api/join', profileData);
      console.log('Backend response:', response.profileData);

      // 성공적으로 백엔드에 데이터를 보낸 후 처리할 작업
      navigate("/MainPage");
    } catch (error) {
      console.error('Error sending data to backend:', error);
      // 오류 처리
    }
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
      <div className="JustifyCenter">
        <img className="SmallLogoImg" src={SmallLogoImg} alt="SmallLogo" />
        <img className="ProfileImage" src={profileInfo?.image} alt={focusedIcon} />
        <img className="ProfileEditButon" src={EditButton} alt="ProfileEditButon" />
        <div className="Nickname">
          닉네임
          <input
            className="NicknameInput"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="Birth">
          생일
          <BirthSelect
            onSelectYear={setSelectedYear}
            onSelectMonth={setSelectedMonth}
            onSelectDay={setSelectedDay}
          />
        </div>
        <button className="Confirmation" onClick={handleConfirmClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default MyPage;
