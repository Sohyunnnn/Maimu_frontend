import React, { useState, useEffect } from 'react';
import './ColorDropdown.css';
import Arrow from '../../images/MyPage/SelectorArrow.svg';

const ColorDropdown = ({ selectedColor, onSelectColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [color, setColor] = useState(selectedColor || '핑크');

  useEffect(() => {
    setColor(selectedColor || '핑크');
  }, [selectedColor]);

  const handleColorChange = (color) => {
    setColor(color);
    onSelectColor(color);
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
        {color}
        <img className='Arrow' src={Arrow} alt='arrow'/>
      </div>
      {isDropdownOpen && (
        <div className="DropdownOptions">
          <div
            className="DropdownOption"
            onClick={() => handleColorChange('핑크')}
          >
            핑크
          </div>
          <div
            className="DropdownOption"
            onClick={() => handleColorChange('노랑')}
          >
            노랑
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
