import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {

    const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;

        align-items: center;
    justify-content: space-between;
    position: sticky;

    height: 120px;

    background-color: #008CFF;
    color: black;
    padding: 0 2% 0 2%;

    `;

  const AboutMe = styled.h2`
  font-family: 'MonaSansRegular';
  font-size: 24px;
  color: #007bff;
  background-color: white;
  border-radius: 8px;
  padding: 5px; 

  &:hover {
    background-color: #007bff;
    color: white;
    border: 1px solid white;
  }
  
  &:link {
      underline: none;
  }
`;
  

    const Title = styled.h1`
        font-family: 'MonaSansBold';
        font-size: 30px;
        color: white;
        
        &:link {
            underline: none;
        }
    `;

    const StyledLink = styled(Link)`
  text-decoration: none; 

  &:hover, &:focus {
    text-decoration: none;  
  }
`;


    return (
        <HeaderContainer>

                <StyledLink to='/'>
                    <Title>Bark Album</Title>
                </StyledLink>

                <StyledLink to='/about'>
                       <AboutMe>About Me</AboutMe>
                </StyledLink>
        </HeaderContainer>
    );
}

export default Header;