import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./WriteDetailPage.css";
import "../../components/PasteLinkAlert/PasteLinkAlert.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import WriteHelpIcon from "../../images/WriteDetailPage/WriteHelpIcon.svg";
import DetailMaimu from "../../components/DetailMaimu/DetailMaimu";
import InformationModal from "../../components/InformationModal/InformationModal";

const WriteDetailPage = () => {
  const navigate = useNavigate();
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

  const openInformationModal = () => setIsInformationModalOpen(true);
  const closeInformationModal = () => setIsInformationModalOpen(false);

  // 빈칸 있으면 포커싱, 맛선택 미완료 시 알림창
  const navigateToWriteNote = () => {
    navigate("/WriteNote");
  };

  return (
    <div className="WriteDetailPage">
      <div className="JustifyCenter">
        <div className="WriteDetailPageContent">
          <img className="SmallLogo" alt="" src={SmallLogoImg} />
          <div className="GroupName">cotato</div>
          <div className="DetailMaimu">
            <DetailMaimu />
            <DetailMaimu />
            <DetailMaimu />
            <DetailMaimu />
          </div>
          <img
            className="WriteHelpIcon"
            alt="WriteHelpIcon"
            src={WriteHelpIcon}
            onClick={openInformationModal}
          />
          <div className="WriteDetail_Button" onClick={navigateToWriteNote}>
            쪽지 작성하기
          </div>
          <InformationModal
            isInformationOpen={isInformationModalOpen}
            closeInformationModal={closeInformationModal}
          />
        </div>
      </div>
    </div>
  );
};

export default WriteDetailPage;
