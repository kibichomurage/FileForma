import {React,useState} from 'react';
import styled from 'styled-components';
import FolderIcon from '@mui/icons-material/Folder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BarChartIcon from '@mui/icons-material/BarChart';import { Routes, Route } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

const SideBarContainer = styled.div`
height: 100%;
width: 20%;
display: block;
background: teal;
`;

const LogoContainer = styled.div`
height: 10%;
width: 90%;
font-size: 45px;
color: white;
margin-left: 10px;
margin-top: 20px;
cursor: pointer;
`;

const SideBarItem = styled.div`
height: 6%;
width: 90%;
display: flex;
align-items: center;
margin-left: 10px;
margin-bottom: 10px;
transition: all 0.25s ease-in-out;
background-color: ${props => props.active ? "#005252" : "#008080"};
&:hover {
  background-color: ${props => props.active ? "#005252" : "#009797"};  }
cursor: pointer;
border-radius: 5px;
`;

const Title = styled.h1`
font-size: 14px;
color: white;
font-weight: 400;
`;

const iconStyle =
{
    "fontSize": "30px",
    "color": "white",
    "cursor":"pointer",
    "padding-left":"10px",
    "padding-right":"10px",
    "&:hover": 
    {
        "color": "lightgray",
        "fontSize": "32px",
    }
}

const Sidebar = ({activeIndex, setActiveIndex}) => {
  const navigate = useNavigate();
  return (
    <SideBarContainer>
        <LogoContainer>FileForma</LogoContainer>
        {SidebarData && SidebarData.map((item, index) =>(
            <SideBarItem key={item.title} active={index === activeIndex} onClick={()=>{setActiveIndex(index);navigate(item.path)}}>  
            <item.icon sx={iconStyle}/>
            <Title>{item.title}</Title>
          </SideBarItem>
        ))}
        
    </SideBarContainer>
  )
}

export default Sidebar

const SidebarData = 
[
  {
    title: 'All Files',
    path:'/home/',
    icon: FolderIcon
  },
  {
    title: 'Recents',
    path:'/home/recents',
    icon: AccessTimeIcon
  },
  {
    title: 'Trash',
    path:'/home/trash',
    icon: DeleteForeverIcon
  },
  {
    title: 'Statistics',
    path:'/home/stats',
    icon: BarChartIcon
  },
  {
    title: 'Logout',
    path:'/home/logout',
    icon: LogoutIcon
  },
]