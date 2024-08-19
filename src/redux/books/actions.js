import { ADDED, DELETED, LOADED } from "./actionTypes";

// This is for Load existing data from the server

export const loaded =(books) => 
{
    return {
        type: LOADED, 
        payload:books
    }
}

export const added =(books) => 
    {
        return {
            type: ADDED, 
            payload:books
        }
    }

export const deleted = (bookId) => 
{
    return {
        type : DELETED,
        payload : bookId
    }
}