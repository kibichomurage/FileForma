import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
width: 100vw;
display: block;
margin: 0;
`;

const Banner = styled.div`
height:5%;
width: 100%;
background-color: blue;
`;

const NavBar = styled.div`
height:10%;
width:100%;
background-color: yellow;
`;

const ContentContainer = styled.div`
height:85%;
width:100%;
background-color: green;
display: flex;
`;

const SideContainer = styled.div`
height:100%;
width:10%;
background-color: purple;
`;

const MainContainer = styled.div`
height:100%;
width:80%;
background-color: red;
`;

const LandingPage = () => {
  return (
    <Container>
        <Banner></Banner>
        <NavBar></NavBar>
        <ContentContainer>
            <SideContainer/>
            <MainContainer>

            </MainContainer>
            <SideContainer/>
        </ContentContainer>
    </Container>
  )
}

export default LandingPage