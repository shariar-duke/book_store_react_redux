import { LOADED } from "./actionTypes";

// This is for Load existing data from the server

export const loaded =(books) => 
{
    return {
        type: LOADED, 
        payload:books
    }
}