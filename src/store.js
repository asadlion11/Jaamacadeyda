import { configureStore } from "@reduxjs/toolkit"; 
import modalReducer from "./feutures/modal/modalSlice";
import universityReducer from './feutures/universities/universitiesSlice' 
export const store = configureStore({
    reducer: {
        modal:modalReducer,
        university:universityReducer,
        
    }
})