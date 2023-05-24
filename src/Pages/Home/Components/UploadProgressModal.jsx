import {React,useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { selectChosenFiles,addFileToList, removeFileFromList} from '../../../Scripts/ReduxReducers';

const ModalContainer = styled.div`
  width: 60%;
  height: ${props => props.bottomNavToggle ? "40%" : "50px"};
  margin-left: 10%;
  margin-right: 20%;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: ${props => props.bottomNavToggle ? "#ffffff" : "#000000"};
  border-radius: 30px 30px 0 0 ;
  position: absolute;
  z-index: 11;
  bottom: 0;
  transition: all 0.5s ease-in-out;
  display: block;
`;

const TopContainer = styled.div`
height: ${props => props.bottomNavToggle ? "40%" : "50px"};
width: 100%;
text-align: center;
justify-content: center;
align-items: center;
cursor:pointer;
background-color: #000000;
border-radius: 30px 30px 0 0 ;
top:0;
&:hover {
    background-color: #1a1a1a;
  }
`;

const TopContainerText = styled.p`
color: white;
font-size: 20px;
padding-top: 10px;
font-weight: 500;
`;

const BottomContainer = styled.div`
width: 100%;
height: ${props => props.bottomNavToggle ? "80%" : "0%"};
background-color: white;
overflow: auto;
`;
const BottomContainerItem = styled.div`
width: 100%;
height: 40px;
border-bottom: solid 0.5px black;
position: relative;

`;

const BottomContainerText = styled.h1`
font-size:20px;
font-weight:500;
position:absolute;
left:40px;
top:10px;
`;

const iconStyle =
{
    "fontSize": "30px",
    "color": "white",
    "cursor":"pointer",
    "transition": "all 0.5s ease-in-out",
    "position":"absolute",
    "right":"10px",
    "top":"6px",
    "transform":"rotate(45deg)"
  
}

const trashStyle =
{
    "fontSize": "30px",
    "color": "black",
    "cursor":"pointer",
    "transition": "all 0.5s ease-in-out",
    "position":"absolute",
    "right":"10px",
    "top":"6px",
    "&:hover": 
    {
        "color": "#1a1a1a",
        "fontSize": "32px",
    }
}

const leftIconStyle =
{
    "fontSize": "30px",
    "color": "black",
    "transition": "all 0.5s ease-in-out",
    "left":"10px",
    "top":"6px",
    "position":"absolute",

}


const UploadProgressModal = ({showModal})  => {
    const [bottomNavToggle, setBottomNavToggle] = useState(false);
    const selectedFiles = useSelector(selectChosenFiles);
    const dispatch = useDispatch()

    function ToggleHandler()
    {
        if(bottomNavToggle === false){setBottomNavToggle(true)}
        else{setBottomNavToggle(false)}
    }

    const DeleteCurrentFile = (event, item) => {
      console.log('Item: ', item);
      dispatch(removeFileFromList(item))
    };
    return (
    showModal ? 
    <ModalContainer bottomNavToggle={bottomNavToggle}>
        <TopContainer onClick={ToggleHandler}>
            <TopContainerText>Uploading...</TopContainerText>
            {
                bottomNavToggle
                ?
                <UnfoldLessOutlinedIcon sx={iconStyle}/>
                :
                <UnfoldMoreOutlinedIcon sx={iconStyle}/>
            }
        </TopContainer>
        <BottomContainer bottomNavToggle={bottomNavToggle}>
            {bottomNavToggle && selectedFiles && selectedFiles.map((item, index) =>(
                <BottomContainerItem>
                    <InsertDriveFileOutlinedIcon sx={leftIconStyle}/>
                    <BottomContainerText>{item} </BottomContainerText>
                    
                    <DeleteForeverOutlinedIcon sx={trashStyle} onClick={e => DeleteCurrentFile(e,item)}/>
                </BottomContainerItem>
            ))}
        </BottomContainer>
        
    </ModalContainer>
    :
    <div></div>
  )
}

const UploadData = 
[
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
  {
    title: 'All Files',
  },
]
export default UploadProgressModal