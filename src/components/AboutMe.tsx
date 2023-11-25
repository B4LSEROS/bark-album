import React from 'react';
import styled from 'styled-components';

const AboutMe: React.FC = () => {
    const MainContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 20%;
        margin-right: 20%;  
    `;

    const Paragraphs = styled.p`
        width: 40%;
        margin-right: 5px;
        margin-left: 5px;
    
    `;

    return (
        <div>
            <h2 style={{fontFamily: "MonaSansBold", fontSize: "35px", textAlign: "center"}}>Hello! My name is Jose Balseros</h2>
            
            <MainContainer>
            
                <Paragraphs>I'm a software engineer with a deep passion for frontend development. I'm fascinated by the intersection of technology and community well-being. My drive is to always stay a step ahead of users' needs, dedicating myself to crafting appealing and functional user interfaces.
                </Paragraphs>
                <img src='/aboutme/me.jpeg' style={{ height: "400px", width: "300px", borderRadius: "8px"}} />

                <img src='/aboutme/Porto.jpg'style={{ height: "400px", width: "300px", borderRadius: "8px"}} />
                <Paragraphs>I recently completed my bachelors degree in CS from Fordham University, and I'm currently pursuing further studies to become a better professional. I am certainly excited about the possibility of interning Eulerity, as I shared some of the same core values that Eulerity embraces, such as Impact, gratitude, and dependability.
                </Paragraphs>

                <Paragraphs>I consider myself a responsible, proactive professional and know that I will provide a positive value to the company, which will allow me to grow both as a professional and as a person. I look forward to further discuss my qualifications, background and get to discover more about Eulerity. Thank you 😄</Paragraphs>

                <img src='/aboutme/mountain.jpg'style={{ height: "400px", width: "300px",borderRadius: "8px"}} />
            </MainContainer>
        </div>
    )
}

export default AboutMe;