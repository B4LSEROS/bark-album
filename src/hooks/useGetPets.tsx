import { useState, useEffect } from 'react';

export interface Pet {
  id: string;
  title: string;
  description: string;
  url: string;
  created: string;
  isSelected: boolean;
}


export const useGetPets = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetch('https://eulerity-hackathon.appspot.com/pets')
    .then(response => response.json())
    .then(data => setPets(data))
    .catch(err => err.message)
  }, []);

  return { pets };
};