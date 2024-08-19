import { FILTERBOOK, SEARCHBOOK } from "./actionTypes";


export const searchBook =(searchedBook)=> 
{
    return {
        type: SEARCHBOOK, 
        payload: searchedBook
    }
}

export const filterBook =(bookType)=> 
    {
        return {
            type: FILTERBOOK, 
            payload: bookType
        }
    }