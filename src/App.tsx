import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import PetList from './components/petList/petList';
import AboutMe from './components/AboutMe';
import BarSearch from './components/BarSearch';
import DownloadButtons from './components/DownloadButtons';
import SelectionButtons from './components/SelectionButtons';
import { useGetPets, Pet } from './hooks/useGetPets';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


const App: React.FC = () => {
  const { pets } = useGetPets();
  const [items, setItems] = useState<Pet[]>([]);
  const [filteredItems, setFilteredItems] = useState<Pet[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Hook to initialize items with respective pets and a selected state
  useEffect(() => {
    const initializedPets = pets.map((pet, index) => ({
      ...pet,
      id: `${pet.title}-${index}`, // Generation of new id using title + index
      isSelected: false
    }));
    setItems(initializedPets);
    setFilteredItems(initializedPets);
  }, [pets]);
  
  // Handle of search and sorting
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLowerCase());
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  
  
  const handleSort = (direction: 'asc' | 'desc') => {
    const sorted = [...filteredItems].sort((a, b) => {
      return direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });
    setFilteredItems(sorted);
  };

  // Toggle of selection for individual items
  const toggleSelection = (id: string) => {
    // Updates the state in 'items'
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setItems(newItems);
  
    const newFilteredItems = filteredItems.map(item => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setFilteredItems(newFilteredItems);
  };

  // Select and clean all the items
  const selectAll = () => {
    const allSelected = items.map(pet => ({ ...pet, isSelected: true }));
    setItems(allSelected);
    setFilteredItems(allSelected);
  };

  const clearSelection = () => {
    const noneSelected = items.map(pet => ({ ...pet, isSelected: false }));
    setItems(noneSelected);
    setFilteredItems(noneSelected);
  };

  // Utilizing the styledComponents library to generate the UI
  const SelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -25px;
    height: auto;
    background-color: #f2f2f2;
    margin-bottom: 40px;
    margin-left:20px;
    margin-right: 20px;
    border-radius: 0 0px 8px 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    & > div { 
      margin: 20px;
    }
  `;

  const Paragraph = styled.p`
    font-family: 'MonaSansRegular';
    font-size: 20px;
  `;

    return (
      <Router>

          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <div className='App'>
      <BarSearch onSearch={handleSearch} onSort={handleSort} />
      

      <SelectorContainer>
        <DownloadButtons items={items} />
        <SelectionButtons selectAll={selectAll} clearSelection={clearSelection}/>
      </SelectorContainer>

      <Paragraph>Welcome to Bark Album</Paragraph>
      <Paragraph>Please check these beautiful pets. Learn more about them and download their images</Paragraph>


      <section className='pet-section'>
      <PetList pets={filteredItems} onToggleSelection={toggleSelection}/>

      </section>
            </div>
              </>
            } />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
      </Router>
    
  );
};

export default App;