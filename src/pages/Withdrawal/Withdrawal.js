import React from 'react';
import './Withdrawal.css';
import SmallLogoImg from '../../images/SmallLogo.svg';
import MiniLogo from '../../images/Withdrawal/MiniLogo.svg';

const Withdrawal = () => {
  return (
    <div className='Withdrawal'>
        <div className='AlignCenter'> 
            <img className='SmallLogoImg' src={SmallLogoImg} alt='SmallLogoImg'/>
            <div className='WithdrawalContainer'>탈퇴 안내</div>
            <div className='MemberWithdrawalGuide'>
                <li>계정이 영구 삭제됩니다.</li>
                <li>모든 편지와 활동 내역이 삭제됩니다.</li>
                <li>삭제된 정보는 복구할 수 없습니다.</li>
                <li>동일 계정으로 재가입 불가합니다.</li>
                <p>MAIMU와 함께 좋은 추억을 <br />만드셨길 바랍니다. 감사합니다.</p>
                <button className='WithdrawalButton'>탈퇴하기</button>
                <button className='BackButton'>돌아가기</button>
            </div>
            <img className='MiniLogo' src={MiniLogo} alt='MiniLogo'/>
        </div>
        
    </div>
  )
}

export default Withdrawal