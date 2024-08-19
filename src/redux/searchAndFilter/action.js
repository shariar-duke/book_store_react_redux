import { FILTERBOOK, SEARCHBOOK } from "./actionTypes";


export const searchBook =(bookName)=> 
{
    return {
        type: SEARCHBOOK, 
        payload: bookName
    }
}

export const filterBook =(bookType)=> 
    {
        return {
            type: FILTERBOOK, 
            payload: bookType
        }
    }