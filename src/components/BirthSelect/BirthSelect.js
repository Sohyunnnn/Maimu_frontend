import React, { useState } from 'react';
import './BirthSelect.css';
import arrowIcon from '../../images/MyPage/SelectorArrow.svg'; 

const Dropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`Dropdown ${isOpen ? 'clicked' : ''}`}>
      <div className='DropdownHeader' onClick={handleToggle}>
        <div className='SelectedOption'>{value ? value.label : placeholder}</div>
        <img src={arrowIcon} alt='DropdownIndicator' style={{ width: '8px', height: '4px', marginRight: '20px' }} />
      </div>
      {isOpen && (
        <div className='DropdownOptions'>
          {options.map((option) => (
            <div
              key={option.value}
              className='DropdownOption'
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BirthSelect = () => {
  const years = Array.from({ length: 100 }, (_, index) => ({ value: 2024 - index, label: `${2024 - index}` }));
  const months = Array.from({ length: 12 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }));
  const days = Array.from({ length: 31 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }));

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className='DropdownContainer'>
      <Dropdown
        options={years}
        value={selectedYear}
        onChange={setSelectedYear}
        placeholder='년'
      />

      <Dropdown
        options={months}
        value={selectedMonth}
        onChange={setSelectedMonth}
        placeholder='월'
      />

      <Dropdown
        options={days}
        value={selectedDay}
        onChange={setSelectedDay}
        placeholder='일'
      />
    </div>
  );
};

export default BirthSelect;
