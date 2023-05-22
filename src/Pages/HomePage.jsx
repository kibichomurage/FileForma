import {React,useState} from 'react';
import styled from 'styled-components';
import Sidebar from './Home/Components/Sidebar';
import Navbar from './Home/Components/Navbar';
import AllFilesPage from './Home/AllFilesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecentPage from './Home/RecentPage';
import TrashPage from './Home/TrashPage';
import StatisticsPage from './Home/StatisticsPage';


const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
margin: 0;
`;


const MainContent = styled.div`
height: 100%;
width: 80%;
display: block;
background: var(--theme-white);
`;

const NavbarContainer = styled.div`
height: 10%;
width: 100%;
display: block;
background: var(--theme-white);
`; 

const PageContainer = styled.div`
height: 90%;
width: 100%;
display: block;
background:var(--theme-white);
`;


const HomePage = () => {
  const [sideBarIndex, setSideBarIndex] = useState(0);
  return (
    <Container>
        <Sidebar activeIndex={sideBarIndex} setActiveIndex={setSideBarIndex}/>
      <MainContent>
        <NavbarContainer>
          <Navbar/>
        </NavbarContainer>
        <PageContainer>
          <Routes>
            <Route path="/" element={<AllFilesPage />}/>
            <Route path="recents" element={<RecentPage/>}/>
            <Route path="trash" element={<TrashPage/>}/>
            <Route path="stats" element={<StatisticsPage/>}/>
          </Routes>
        </PageContainer>
      </MainContent>
    </Container>
  )
}

export default HomePage;

