import {React, useRef} from 'react';
import styled from 'styled-components';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import { useSelector, useDispatch } from 'react-redux'
import { selectChosenFiles,addFileToList} from '../../../Scripts/ReduxReducers';

const ModalContainer = styled.div`
  width: 17%;
  height: 30%;
  min-height: 200px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: var(--theme-white);
  opacity: 0.98;
  color: #000;
  display: block;
  position: absolute;
  right: 20px;
  z-index: 10;
  border-radius: 10px;
  opacity:0.98;
  justify-content: center;
  align-items: center;
  "transition": "all 0.5s ease-in-out",
`;

const ContainerItem = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  height:20%;
  width: 90%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #E2D1C3;
    border-radius: 10px;
  }
`;

const ItemTitle = styled.h1`
font-size: 13px;
color: black;
font-weight: 500;
`;

const SectionTitle = styled.h1`
margin-top: 5%;
margin-bottom: 5%;
margin-left: 7.5%;
font-size: 12px;
color: black;
font-weight: 1000;
`;

const iconStyle =
{
    "fontSize": "30px",
    "color": "black",
    "cursor":"pointer",
    "padding-right":"10px",
  
}
const Divider = styled.div`
  width:90%;
  margin-right: 5%;
  margin-left: 5%;
  height:1%;
  background-color: black;
`;




const NewUploadModal = ({showModal}) => {
  const hiddenFileInput = useRef(null);
  const selectedFiles = useSelector(selectChosenFiles);
  const dispatch = useDispatch()

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const HandleSelectedFiles = event => {
    const uploadedFiles = event.target.files;
    for(var file of uploadedFiles)
    {
      dispatch(addFileToList(file.name)) 
    }
  };
  
  
  return(
    showModal ? 
    <ModalContainer>
      <SectionTitle>Upload</SectionTitle>
      {UploadModalData && UploadModalData.map((item, index) =>(
            <ContainerItem key={item.title}  onClick={handleClick}>  
              <item.icon sx={iconStyle}/>
              <ItemTitle>{item.title}</ItemTitle>
              <input
                multiple
                type="file"
                aria-label='Add'
                ref={hiddenFileInput}
                onChange={HandleSelectedFiles}
                style={{display: 'none'}}/>
            </ContainerItem>
        ))}
        <Divider/>
        <SectionTitle>Create Empty</SectionTitle>
        {EmptyModalData && EmptyModalData.map((item, index) =>(
            <ContainerItem key={item.title} >  
              <item.icon sx={iconStyle}/>
              <ItemTitle>{item.title}</ItemTitle>
            </ContainerItem>
        ))}
    </ModalContainer>
    :
    <div></div>
  )
}

const UploadModalData = 
[
  {
    title: 'File Upload',
    icon: UploadFileOutlinedIcon,
  },
  {
    title: 'Folder Upload',
    icon: DriveFolderUploadOutlinedIcon,
  },

];

const EmptyModalData = 
[
  {
    title: 'Create Empty Folder',
    icon: FolderIcon,
  }

];


export default NewUploadModal