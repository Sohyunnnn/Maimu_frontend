import React from 'react';
import "./MainPage.css";
import MainLogo from "../../images/MainLogo.svg";
import BlackBoard from "../../images/BlackBoard.svg";
import WallPaper from "../../images/WallPaper.svg";

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='Main'>
        <div className="imageContainer">
          <img src={WallPaper} alt="WallPaper" className="overlappingImage" />
          <img src={BlackBoard} alt="BlackBoard" className="overlappingImage" />
          <img src={MainLogo} alt="Main Logo" className="overlappingImage"/>
        </div>
        <div >
            <div className='molding'></div>
            <div className='floor'></div>
        </div>
        
        
      </div>
    </div>
  );
};

export default MainPage;
