import { LOADED } from "./actionTypes";
import { initialState } from "./initialState";

function nextBookId(books) 
{
    const maxId = books.reduce((maxId, book) => Math.max(maxId ,book.id), -1)
    return maxId+1
}

const reducer =(state = initialState, action) => 
{
  switch(action.Type) 
  {
    case LOADED : 
    return action.payload

    default: 
    return state
  }
}