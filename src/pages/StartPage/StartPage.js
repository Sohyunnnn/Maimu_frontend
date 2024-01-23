import React, { useState } from "react";
import "./StartPage.css";

import WallPaper from "../../images/WallPaper.svg";
import LoginButton from "../../images/LoginButton.svg";
import InformationButton from "../../images/InformationButton.svg";
import LoginModal from "../../components/LoginModal/LoginModal.js";
import InformationModal from "../../components/InformationModal/InformationModal.js";

import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openInformationModal = () => setIsInformationModalOpen(true);
  const closeInformationModal = () => setIsInformationModalOpen(false);

  return (
    <div className="StartPage">
      <div className="WallPaper">
        <img src={WallPaper} alt="WallPaper" />

        <div className="InformationButton" onClick={openInformationModal}>
          <img src={InformationButton} alt="InformationButton" />
        </div>
        <div className="LoginButton" onClick={openLoginModal}>
          <img src={LoginButton} alt="LoginButton" />
        </div>
        <LoginModal
          isLoginOpen={isLoginModalOpen}
          closeLoginModal={closeLoginModal}
        />
        <InformationModal
          isInformationOpen={isInformationModalOpen}
          closeInformationModal={closeInformationModal}
        />
      </div>
    </div>
  );
};

export default StartPage;
