import { ADDED, LOADED } from "./actionTypes";
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

    default:
      return state;
  }
};


export default reducer;


