import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./DetailPage.css";
import "../../components/PasteLinkAlert/PasteLinkAlert.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import PasteLink from "../../images/DetailPage/PasteLink.svg";
import DetailMaimu from "../../components/DetailMaimu/DetailMaimu";
import { PasteLinkAlert } from "../../components/PasteLinkAlert/PasteLinkAlert";

const DetailPage = () => {
  const [pasteState, setPasteState] = useState(false);

  return (
    <div className="DetailPage">
      <div className="DetailPageContent">
      <div className="Header">
        <img className="SmallLogo" alt="" src={SmallLogoImg} />
        <img
          className="PasteLink"
          alt="PasteLink"
          src={PasteLink}
          onClick={() => setPasteState(true)}
        />
      </div>
      <div className="GroupName">그룹 이름</div>
      <div className="DetailMaimu">
        <DetailMaimu />
        <DetailMaimu />
        <DetailMaimu />
        <DetailMaimu />
      </div>
      {pasteState && <PasteLinkAlert setPasteState={setPasteState} />}
    </div>
    </div>
  );
};

export default DetailPage;
