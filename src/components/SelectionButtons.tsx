import React from 'react';
import styled from 'styled-components';


interface SelectionButtonProps {
    selectAll: () => void;
    clearSelection: () => void;
  }

const SelectionButtons: React.FC<SelectionButtonProps> = ({ selectAll, clearSelection }) => {

  const SelectionButtons = styled.button`
    background-color: white;
    border: 1px solid #008CFF;
    border-radius: 8px;
    color: #008CFF;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
      color: white;
      border: none;
    }
  
    &:focus {
      outline: none;
    }
  `;

    return (
        <div>
          <SelectionButtons onClick={selectAll}>Select All</SelectionButtons>

          <SelectionButtons onClick={clearSelection}>Clear Selection</SelectionButtons>
        </div>
    )
}

export default SelectionButtons;