import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PasteLinkAlert } from "../../components/PasteLinkAlert/PasteLinkAlert";

import "./DetailPage.css";
import "../../components/PasteLinkAlert/PasteLinkAlert.css";
import SmallLogoImg from "../../images/SmallLogo.svg";
import PasteLink from "../../images/DetailPage/PasteLink.svg";
import DetailMaimu from "../../components/DetailMaimu/DetailMaimu";

const DetailPage = () => {
  const [pasteState, setPasteState] = useState(false);
  const { groupName, groupColor } = useParams();

  // URL 파라미터로 받아온 값을 디코딩
  const decodedGroupName = decodeURI(groupName);
  const decodedGroupColor = decodeURI(groupColor);

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
        <div className="GroupName">{decodedGroupName}</div>
        <div className="GroupName">{decodedGroupColor}</div>
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
