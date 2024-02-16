import React, { useState } from 'react';
import './ColorDropdown.css';
import Arrow from '../../images/MyPage/SelectorArrow.svg';

const ColorDropdown = ({ selectedColor, onSelectColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 디폴트 값이 노랑인 useState를 이용하여 selectedColor 상태를 설정합니다.
  const [color, setColor] = useState(selectedColor || '노랑');

  const handleColorChange = (color) => {
    setColor(color); // 선택한 색상을 상태로 설정합니다.
    onSelectColor(color); // 선택한 색상을 부모 컴포넌트로 전달합니다.
    closeDropdown();
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="GroupColorDropdown">
      <div
        className={`DropdownToggle ${isDropdownOpen ? 'open' : ''}`}
        onClick={handleDropdownToggle}
      >
        {color} {/* 상태를 직접 출력합니다. */}
        <img className='Arrow' src={Arrow} alt='arrow'/>
      </div>
      {isDropdownOpen && (
        <div className="DropdownOptions">
          <div
            className="DropdownOption"
            onClick={() => handleColorChange('노랑')}
          >
            노랑
          </div>
          <div
            className="DropdownOption"
            onClick={() => handleColorChange('핑크')}
          >
            핑크
          </div>
          <div
            className="DropdownOption"
            onClick={() => handleColorChange('초록')}
          >
            초록
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorDropdown;
