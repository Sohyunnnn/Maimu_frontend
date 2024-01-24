import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import EditButton from "../../images/MyPage/EditButton.svg";
import BirthSelect from "../../components/BirthSelect/BirthSelect";

const MyPage = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/MainPage");
  };

  return (
    <div className="MyPage">
      <div className="AlignCenter">
        <img className="SmallLogoImg" src={SmallLogoImg} alt="SmallLogo" />
        <div className="ProfileBackground"></div>
        <img
          className="ProfileEditButon"
          src={EditButton}
          alt="ProfileEditButon"
        />
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

// import React, { useState } from "react";
// import "./MyPage.css";
// import ChooseBGModal from "../../components/ChooseBGModal/ChooseBGModal";

// const MyPage = () => {
//   const [isChooseBGModalOpen, setIsChooseBGModalOpen] = useState(false);

//   const openChooseBGModal = () => setIsChooseBGModalOpen(true);
//   const closeChooseBGModal = () => setIsChooseBGModalOpen(false);

//   return (
//     <div className="MyPage">
//       <div className="MyPageWP">
//         MyPage
//         <div className="ChooseBGButton" onClick={openChooseBGModal}>
//           click
//         </div>
//         <ChooseBGModal
//           isChooseBGOpen={isChooseBGModalOpen}
//           closeChooseBGModal={closeChooseBGModal}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyPage;
