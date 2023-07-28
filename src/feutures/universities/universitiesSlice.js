import { createSlice } from "@reduxjs/toolkit";
import universities from '../../assets/universities.json'
const initialState = {
    universities : JSON.parse(window.localStorage.getItem('universities')) || universities,
    currentUniversity: null,
    voteCount: 0
}
const universitySlice = createSlice({
    name: "university",
    initialState,
    reducers:{
        setCurrentUniversity: (state,action) => {
            state.currentUniversity = action.payload
        },
        increaseVote: (state) => {
            state.voteCount++
        },
        decreaseVote: (state) => {
            state.voteCount == 0? state.voteCount = 0 : state.voteCount--
        },
        addVoteToUniversity: (state,action) => {
            let universityIndex = state.universities.findIndex(university => university.Id === action.payload)
            state.universities[universityIndex].Votes = 
            Number(state.universities[universityIndex].Votes) + 
            Number(state.voteCount)
            window.localStorage.setItem('universities', JSON.stringify(state.universities))
        },
        resetState: (state) => {
            state.currentUniversity = null
            state.voteCount = 0
        } 
}
})
export default universitySlice.reducer
export const {setCurrentUniversity,increaseVote,decreaseVote,addVoteToUniversity,resetState}  = universitySlice.actions