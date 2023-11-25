import React from 'react';
import styled from 'styled-components';
import { Pet } from '../../hooks/useGetPets';
import './pet-list-style.css';

const PetCard = styled.div`
  background-color: #f2f2f2; // Fondo gris claro
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative; // Para posicionar absolutamente el checkbox

  img {
    max-width: 100%;
    height: 300px;
    border-radius: 10px;
  }

  h3 {
    margin: 10px 0; // Espacio para el título
  }

  p, small, input[type="checkbox"] {
    display: none; // Ocultar por defecto
  }

  input[type="checkbox"] {
    display: none; // Ocultar el checkbox por defecto
    appearance: none; // Quitar el estilo por defecto del navegador
    background-color: #008CFF; // Color de fondo
    width: 30px; // Ancho del checkbox
    height: 30px; // Altura del checkbox
    border-radius: 5px; // Bordes redondeados
    position: relative; // Para el icono de check

    &:checked::after {
      content: '✔'; // Icono de check
      color: white; // Color del check
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px; // Tamaño del icono de check
    }
  }


  &:hover {
    transform: scale(1.05); // Efecto de zoom al hacer hover

    p, small {
      display: block; // Mostrar al hacer hover
    }

    input[type="checkbox"] {
      display: block; // Mostrar el checkbox al hacer hover
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





