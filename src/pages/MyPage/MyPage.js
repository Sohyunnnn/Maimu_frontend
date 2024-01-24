import React, { useRef } from 'react';
import './MyPage.css';
import SmallLogoImg from '../../images/SmallLogo.svg';
import EditButton from '../../images/MyPage/EditButton.svg';
import BirthSelect from '../../components/BirthSelect/BirthSelect';

const MyPage = () => {

  const birthSelectRef = useRef(null);
  const nicknameInputRef = useRef(null);

  const handleBirthSelectClick = () => {
    birthSelectRef.current.focus();
  };

  const handleNicknameClick = () => {
    nicknameInputRef.current.focus();
  };

  return (
    <div className='MyPage'>
      <div className='Edit'>
        <img className='SmallLogoImg' src={SmallLogoImg} alt='SmallLogo'/>
        <div className='ProfileBackground'></div>
        <img className='EditButton' src={EditButton} alt='EditButton'/>
        <div className='Nickname'>
          닉네임
          <input className='NicknameInput' ref={nicknameInputRef} />
        </div>
        <div className='Birth'>
          생일
          <BirthSelect ref={birthSelectRef} />
        </div>
        <button>확인</button>
      </div>
      
    </div>
  )
}

export default MyPage