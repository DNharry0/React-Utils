import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
// import dropDown from '../../public/images/dropDown.svg';
// import dropDown from '../../public/images/dropDown.svg';
import Image from 'next/image';

interface SelectBoxProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  value: string;
}
/**
 * @options { label: string; value: string }[];
 * @onChange (value: string) => void;
 * @value string;
 */
const SelectBox: React.FC<SelectBoxProps> = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <SelectContainer ref={containerRef}>
      <SelectedValue onClick={handleToggleDropdown}>
        {options.find((option) => option.value === value)?.label || '선택'}
        {/* <Image
          src={dropDown}
          alt="dropDown"
          width={24}
          height={24}
          className={`dropDown ${isOpen ? 'rotate' : ''}`}
        /> */}
      </SelectedValue>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

export default SelectBox;

const SelectContainer = styled.div`
  position: relative;
  width: 172px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #f3f4f6;
  background: #fff;
`;

const SelectedValue = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #f3f4f6;
  background: #fff;
  color: #0d0d0f;
  font-family: Noto Sans KR;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;

  .dropDown {
    margin-left: auto;
    margin-right: 8px;
    transition: transform 0.3s ease;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  border: 1px solid #f3f4f6;
  border-top: none;
  background: #fff;
  max-height: 200px;
  overflow-y: auto;

  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  padding: 8px;
  padding-left: 16px;
  height: 34px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 140%;

  &:hover {
    background-color: #f3f4f6;
  }
  cursor: pointer;
`;
