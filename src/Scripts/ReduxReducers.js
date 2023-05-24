import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNewUploadModal:false,
  showUploadProgressModal:false,
  listOfSelectedFiles: []
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: 
  {
    openCloseNewUploadModal:(state) =>
    {
        if(state.showNewUploadModal === true){state.showNewUploadModal = false}
        else{state.showNewUploadModal = true}
    },
    openCloseUploadProgressModal:(state) =>
    {
        if(state.showUploadProgressModal === true){state.showUploadProgressModal = false}
        else{state.showUploadProgressModal = true}
    },
    addFileToList: (state, action) =>
    {
      state.listOfSelectedFiles.push(action.payload)
    },
    removeFileFromList: (state, action)=>
    {
      state.listOfSelectedFiles = state.listOfSelectedFiles.filter((item) => item !== action.payload);
    }
  }
});

export const { openCloseNewUploadModal, openCloseUploadProgressModal, addFileToList, removeFileFromList} = modalSlice.actions;
export const selectNewUploadState = (state) => state.modal.showNewUploadModal;
export const selectUploadProgressState = (state) => state.modal.showNewUploadModal;
export const selectChosenFiles = (state) => state.modal.listOfSelectedFiles;

