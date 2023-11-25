import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-grow: 1;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const SortButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

interface Props {
  onSearch: (searchTerm: string) => void;
  onSort: (direction: 'asc' | 'desc') => void;
}

const BarSearch: React.FC<Props> = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search your Favorite Pet by Name or Description"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SortButton onClick={() => onSort('asc')}>Sort A-Z</SortButton>
      <SortButton onClick={() => onSort('desc')}>Sort Z-A</SortButton>
    </SearchContainer>
  );
};

export default BarSearch;
