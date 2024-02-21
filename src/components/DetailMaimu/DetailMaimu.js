import React from "react";
import { useNavigate } from "react-router-dom";

import "./DetailMaimu.css";
import GreyMaimu from "../../images/DetailPage/GreyMaimu.svg";

const DetailMaimu = () => {
  const navigate = useNavigate();

  const navigateToLoadingPage = () => {
    navigate("/LoadingPage");
  };

  return (
    <img
      className="GreyMaimu"
      src={GreyMaimu}
      alt="GreyMaimu"
      onClick={navigateToLoadingPage}
    />
  );
};

export default DetailMaimu;
