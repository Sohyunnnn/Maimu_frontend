import React, { useState } from "react";
import "./MyBG.css";

const MyBG = ({ backgroundColor }) => {
  const [choseMyBG, setChoseMyBG] = useState("");
  return (
    <div
      className={`MyBG ${choseMyBG === "choseBG" ? "choseBG" : undefined}`}
      onClick={() => setChoseMyBG("choseBG")}
      style={{ backgroundColor }}
    ></div>
  );

  // return <div className="MyBG" style={{ backgroundColor }}></div>;
};
export default MyBG;
