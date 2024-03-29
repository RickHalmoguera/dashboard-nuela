import { createSlice } from "@reduxjs/toolkit";
import { getSubjectsListFromAPIThunk } from "./subjectsThunk";
import {SubjectInterface, SubjectsSliceInitialStateInterface} from "../../interfaces/SubjectInterfaces"
import { RootState } from "../../app/store";

const initialState: SubjectsSliceInitialStateInterface = {
    data: [],
    status: 'idle',
    error: undefined
}


export const subjectsSlice = createSlice({
    name: "subjects",
    initialState:initialState,
    reducers:{
        updateSubjects: (state,action)=>{
            const subjectToUpdate = action.payload
            const updatedSubjects = state.data.map((item : SubjectInterface)=> item.id === subjectToUpdate.id ? {...subjectToUpdate} : item) 
            state.data = updatedSubjects 
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSubjectsListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        builder.addCase(getSubjectsListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(action)
            state.error = action.error.message
        })
        builder.addCase(getSubjectsListFromAPIThunk.pending,(state)  => {
            state.status = "pending"
        })
    }
});

export const {updateSubjects} = subjectsSlice.actions
export const getSubjectsData = (state: RootState): SubjectInterface[] => state.subjects.data;
export const getSubjectsStatus = (state: RootState) :string=> state.subjects.status;
export const getSubjectsError = (state: RootState):string|undefined => state.subjects.error;