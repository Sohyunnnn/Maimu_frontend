import React from 'react';
import { useNavigate } from "react-router-dom";
import './MyPage.css';
import SmallLogoImg from '../../images/SmallLogo.svg';
import EditButton from '../../images/MyPage/EditButton.svg';
import BirthSelect from '../../components/BirthSelect/BirthSelect';

const MyPage = () => {

  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/MainPage');
  };

  return (
    <div className='MyPage'>
      <div className='Edit'>
        <img className='SmallLogoImg' src={SmallLogoImg} alt='SmallLogo'/>
        <div className='ProfileBackground'></div>
        <img className='EditButton' src={EditButton} alt='EditButton'/>
        <div className='Nickname'>
          닉네임
          <input className='NicknameInput' />
        </div>
        <div className='Birth'>
          생일
          <BirthSelect />
        </div>
        <button onClick={handleConfirmClick}>확인</button>
      </div>
      
    </div>
  )
}

export default MyPage