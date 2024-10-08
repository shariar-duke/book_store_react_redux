import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes";
import { initialState } from "./initialState";

function nextBookId(books) {
    const maxId = books.reduce((maxId, book) => Math.max(maxId, book.id), -1);
    return maxId + 1;
  }


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED: 
      return [...state, {
        ...action.payload,
        id: nextBookId(state)
      }]

    case EDITED: 
      return state.map((book) => {
        if(book.id === action.payload.id) 
        {
            return action.payload
        }

        else 
        {
            return book
        }
      })


    case DELETED: 
     return  state.filter((book) => book.id !== action.payload)

    default:
      return state;
  }
};


export default reducer;


