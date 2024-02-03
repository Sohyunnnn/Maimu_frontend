
import React, { useState } from 'react';
import './ColorDropdown.css';
import Arrow from '../../images/MyPage/SelectorArrow.svg'

const ColorDropdown = ({ isOpen, onClose }) => {

    const [selectedColor, setSelectedColor] = useState('노랑');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    closeDropdown();
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSave = () => {
    console.log('Selected Color:', selectedColor);
    onClose();
  };



  return (
    <div className="GroupColorDropdown">
          <div
            className={`DropdownToggle ${isDropdownOpen ? 'open' : ''}`}
            onClick={handleDropdownToggle}
          >
            {selectedColor || '색상 선택'}
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
  )
}

export default ColorDropdown