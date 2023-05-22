import React from 'react'
import styled from 'styled-components';
import FolderIcon from '@mui/icons-material/Folder';


const Container = styled.div`
height:100%;
width:100%;
display:block;
`;

const TitleContainer = styled.div`
height:5%;
width:100%;
display:flex;
justify-content: center;
align-items: bottom;
border-radius: 10%;
`;

const TitlePartition = styled.div`
height:100%;
width:31%;
border-bottom: 0.1px solid black;
display: flex;
justify-content: center;
align-items: flex-end;
&:hover {
    background-color: lightgray;
  }
  cursor: pointer;
`;

const SideContainer = styled.div`
height:100%;
width:20px;
`;

const MiniContainer = styled.div`
height:100%;
width:5px;
`;

const TitleText = styled.h3`
font-size: 18px;
font-weight: 400;
`;

const SingleItem = styled.div`
height:5%;
width: 94%;
margin-left: 20px;
border-bottom: 0.1px solid black;
display: flex;
margin-right: 20px;
cursor: pointer;
&:hover {
    background-color: lightgray;
  }
`;

const ItemPartition = styled.div`
height:100%;
width:33%;
display: flex;
justify-content: space-between;
align-items: flex-end;
`;

const PartitionText = styled.h3`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-weight: 500;
margin-left: 10px;
`;

const UpdateText = styled.h3`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-weight: 300;
margin-left: 8px;
font-size:16px;
`;
const SizeText = styled.h3`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-weight: 400;
margin-left: 20px;
font-size:16px;
`;

const ListviewFolder = () => {
  return (
    <Container>
        <TitleContainer>
            <TitlePartition>
                <TitleText>Name</TitleText>
            </TitlePartition>
            <MiniContainer/>
            <TitlePartition>
                <TitleText>Updated by</TitleText>
            </TitlePartition>
            <MiniContainer/>
            <TitlePartition>
                <TitleText>Size</TitleText>
            </TitlePartition>
            <SideContainer/>
        </TitleContainer>
        
        <SingleItem>
            <ItemPartition>
                <FolderIcon/>
                <PartitionText>This is a folder This is a folder This is a folder</PartitionText>
            </ItemPartition>
            <ItemPartition>
                <UpdateText>Updated by Murage Kibicho at 6.26pm</UpdateText>
            </ItemPartition>
            <ItemPartition>
                <SizeText>19 files</SizeText>
                <SizeText>190 MB</SizeText>
            </ItemPartition>
        </SingleItem>
    </Container>
  )
}

export default ListviewFolder