import React from 'react';
import styled from 'styled-components';
import { Pet } from '../../hooks/useGetPets';
import './pet-list-style.css';

const PetCard = styled.div`
background-color: #f2f2f2; // Light gray background
border-radius: 10px;
padding: 10px;
margin: 10px 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;
position: relative; // For absolute positioning of the checkbox

img {
  max-width: 100%;
  height: 300px;
  border-radius: 10px;
}

h3 {
  margin: 10px 0; // Space for the title
}

p, small, input[type="checkbox"] {
  display: none; // Hide by default
}

input[type="checkbox"] {
  display: none; // Hide checkbox by default
  appearance: none; // Remove default browser styling
  background-color: #008CFF; // Background color
  width: 30px; // Width of the checkbox
  height: 30px; // Height of the checkbox
  border-radius: 5px; // Rounded borders
  position: relative; // For the check icon

  &:checked::after {
    content: '✔'; // Check icon
    color: white; // Color of the check
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px; // Size of the check icon
  }
}


&:hover {
  transform: scale(1.05); // Zoom effect on hover

  p, small {
    display: block; // Show on hover
  }

  input[type="checkbox"] {
    display: block; // Show the checkbox on hover
  }
}
`;

interface PetListProps {
  pets: Pet[];
  onToggleSelection: (id: string) => void;
}

const PetList: React.FC<PetListProps> = ({ pets, onToggleSelection }) => {
  return (
    <div className='petList-container'>
      {pets.map((pet) => (
        <div className='sub-pet-container' key={pet.id}>
          <PetCard>
            <img src={pet.url} alt={pet.title} />
            <h3>{pet.title}</h3>
            <p>{pet.description}</p>
            <small>{pet.url}</small>
            <input
              type="checkbox"
              checked={pet.isSelected}
              onChange={() => onToggleSelection(pet.id)}
            />
          </PetCard>
        </div>
      ))}
    </div>
  );
};


export default PetList;





