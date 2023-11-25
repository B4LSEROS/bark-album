import React from 'react';
import styled from 'styled-components';
import { Pet } from '../hooks/useGetPets';


interface DownloadButtonProps {
    items: Pet[];
}

const DownloadButtons: React.FC<DownloadButtonProps> = ({items}) => {

    const downloadSelectedImages = () => {
        items.filter(item => item.isSelected).forEach(item => {
          downloadImage(item.url, item.title);
        });
      };

      const downloadImage = (url: string, filename: string) => {
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${filename}.jpg`;
            link.click();
            URL.revokeObjectURL(link.href);
          })
          .catch(e => console.error('Error downloading the pet.', e));
      };


    const DownloadContainer = styled.button`
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

            <DownloadContainer onClick={downloadSelectedImages}>Download Selected Pets</DownloadContainer>

        </div>
    )
}

export default DownloadButtons;