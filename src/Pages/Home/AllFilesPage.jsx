import {React,useState} from 'react';
import styled from 'styled-components';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ListviewFolder from './Components/ListviewFolder';
import NewUploadModal from './Components/NewUploadModal';
import UploadProgressModal from './Components/UploadProgressModal';


const Container = styled.div`
height:100%;
width:100%;
background-color:var(--theme-white);
`;

const TitleContainer = styled.div`
height: 10%;
width:100%;
display:flex;
justify-content: space-between;
align-items: bottom;
`;

const SummaryTitle = styled.h1`
margin-left:25px;
margin-top:20px;
font-weight:500;
font-size: 30px;
`; 

const NewButtonContainer= styled.div`
height: 34px;
width: 80px;
background: transparent;
border-radius: 5px;
border: 1px solid var(--primary-color);
display: flex;
margin-right:20px;
margin-top:20px;
text-align: center;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const NewText= styled.h1`
font-weight:500;
font-size: 15px;
padding-left: 3px;
transition: all 0.5s ease-in-out;
`; 

const iconStyle =
{
    "fontSize": "20px",
    "color": "black",
    "cursor":"pointer",
    "padding-right":"10px",
    "transition": "all 0.5s ease-in-out"
  
}

const AllFilesPage = () => {
  const [showNewUploadModal, setShowNewUploadModal] = useState(false);
  const [showUploadProgressModal, setShowUploadProgressModal] = useState(true);

  function NewUploadModalHander()
  {
    if(showNewUploadModal === false){setShowNewUploadModal(true)}
    else{setShowNewUploadModal(false)}
  }

  function UploadProgressModalHander()
  {
    if(showUploadProgressModal === false){setShowUploadProgressModal(true)}
    else{setShowUploadProgressModal(false)}
  }
  return (
    <Container>
      <TitleContainer>
        <SummaryTitle>All Files</SummaryTitle>
        <NewButtonContainer>
          {
            showNewUploadModal ?<CloseIcon sx={iconStyle}/> : <NoteAddOutlinedIcon sx={iconStyle}/>
          }
          <NewText onClick={NewUploadModalHander}>{showNewUploadModal ? "Close" : "New"}</NewText>
        </NewButtonContainer>
      </TitleContainer>
      <NewUploadModal showModal={showNewUploadModal} setShowModal={setShowNewUploadModal}/>
      <UploadProgressModal showModal={showUploadProgressModal} setShowModal={setShowUploadProgressModal} />
      <ListviewFolder/>
    </Container>
  )
}

export default AllFilesPage