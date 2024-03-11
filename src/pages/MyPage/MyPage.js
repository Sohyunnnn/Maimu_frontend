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
import api from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const access_token = localStorage.getItem("access_token");


  console.log("access_token: ", access_token)

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
  
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
  
    if (access_token) {
      try {
        const response = await axios.post(`${api.baseUrl}/user/join`, profileData, {
          headers: headers
        });
  
        console.log('Backend response:', response.data);
  
        // 성공적으로 백엔드에 데이터를 보낸 후 처리할 작업
        navigate("/MainPage"); 
        
      } catch (error) {
        console.error('Error sending data to backend:', error);
  
        // 오류 처리
        if (error.response && error.response.status === 409) {
          // 닉네임 중복 오류
          toast.error('이미 존재하는 닉네임입니다.', {
            // autoClose: 3000,
            // hideProgressBar: true,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
          });
        } else {
          // 기타 오류
          toast.error('서버 오류가 발생했습니다.', {
            // position: 'top-center',
            // autoClose: 3000,
            // hideProgressBar: true,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
          });
    }
  }
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


  const MoveToProfileEdit=()=>{

    if (access_token) {
      // access_token이 있을 때
      navigate(`/ProfileEdit?accessToken=${access_token}`);
    } else {
      // access_token이 없을 때
      console.log("accessToken이 없습니다.")
    }

  }

  return (
    <div className={`MyPage ${profileInfo?.backgroundClass}`}>
       <ToastContainer />
      <div className="JustifyCenter">
        <img className="SmallLogoImg" src={SmallLogoImg} alt="SmallLogo" />
        <img className="ProfileImage" src={profileInfo?.image} alt={focusedIcon} onClick={MoveToProfileEdit}/>
        <img className="ProfileEditButon" src={EditButton} alt="ProfileEditButon" onClick={MoveToProfileEdit}/>
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
