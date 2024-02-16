import React, { useState, useEffect, useRef } from 'react';
import './BirthSelect.css';
import arrowIcon from '../../images/MyPage/SelectorArrow.svg'; 

const Dropdown = ({ options, value, onChange, placeholder, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleOptionClick = (option) => {
    onChange(option);
    onToggle(false);
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    onToggle(!isOpen);
  };

  return (
    <div className='BirthSelect'>
    <div className={`Dropdown ${isOpen ? 'clicked' : ''}`} ref={dropdownRef} onClick={handleDropdownClick}>
      <div className='DropdownHeader'>
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

  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);

  const closeDropdowns = (currentDropdown) => {
    switch (currentDropdown) {
      case 'year':
        setIsMonthOpen(false);
        setIsDayOpen(false);
        break;
      case 'month':
        setIsYearOpen(false);
        setIsDayOpen(false);
        break;
      case 'day':
        setIsYearOpen(false);
        setIsMonthOpen(false);
        break;
      default:
        setIsYearOpen(false);
        setIsMonthOpen(false);
        setIsDayOpen(false);
    }
  };

  return (
    <div className='DropdownContainer'>
      <Dropdown
        options={years}
        value={selectedYear}
        onChange={setSelectedYear}
        placeholder='년'
        isOpen={isYearOpen}
        onToggle={(value) => { setIsYearOpen(value); closeDropdowns('year'); }}
      />

      <Dropdown
        options={months}
        value={selectedMonth}
        onChange={setSelectedMonth}
        placeholder='월'
        isOpen={isMonthOpen}
        onToggle={(value) => { setIsMonthOpen(value); closeDropdowns('month'); }}
      />

      <Dropdown
        options={days}
        value={selectedDay}
        onChange={setSelectedDay}
        placeholder='일'
        isOpen={isDayOpen}
        onToggle={(value) => { setIsDayOpen(value); closeDropdowns('day'); }}
      />
    </div>
  );
};

export default BirthSelect;
