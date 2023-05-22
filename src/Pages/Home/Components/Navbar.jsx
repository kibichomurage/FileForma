import React from 'react'
import { styled } from 'styled-components';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import { Badge } from '@mui/material';

const Container = styled.div`
height:100%;
width:100%;
display:block;
justify-content: center;
`;

const BannerContainer = styled.div`
height: 20px;
width: 100%;
color:white;
font-size: 15px;
background-color:teal;
text-align:center;
justify-content:center;
align-items:center;
cursor: pointer;
border-radius: 5px;
`;

const TopContainer = styled.div`
height:90%;
width:100%;
display:flex;
`;

const SearchContainer = styled.div`
height:50px;
width:40%;
justify-content:center;
align-items:center;
`;

const SearchBar = styled.div`
height:50%;
width:75%;
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
margin-top:20px;
border-radius:5px;

`

const Input = styled.input`
border:none;
height:90%;
width:90%;
`;


const IconContainer = styled.div`
height:100%;
width:60%;
display: flex; 
justify-content: flex-end;
`;

const IconDiv = styled.div`
cursor:pointer;
height:50px;
width:50px;
align-items:center;
margin-top:20px;
`;

const iconStyle =
{
    "fontSize": "30px",
    "color": "lightgray",
    "cursor":"pointer",
    "&:hover": 
    {
        "color": "black",
        "fontSize": "32px",
    }
}

const Navbar = () => {
  return (
    <Container>
        <BannerContainer>Discounts for non-profits and startups operating in 3rd world countries!</BannerContainer>
        <TopContainer>
            <SearchContainer>
                <SearchBar>
                    <Input placeholder="Search for files and folders"/>
                    <SearchOutlinedIcon sx={{cursor:"pointer", color:"gray", fontSize:23, "&:hover": { color: "black", fontSize:24 }}}/>
                    
                </SearchBar>
            </SearchContainer>
            <IconContainer>
                <IconDiv>
                    <HelpIcon sx={iconStyle}  />
                </IconDiv>
                <IconDiv>
                    <Badge badgeContent={4} color='primary' >
                        <NotificationsIcon sx={iconStyle} />
                    </Badge>
                </IconDiv>
                <IconDiv>
                    <ManageAccountsIcon sx={iconStyle}  />
                </IconDiv>
                
            </IconContainer>
        </TopContainer>
    </Container>
  )
}

export default Navbar
