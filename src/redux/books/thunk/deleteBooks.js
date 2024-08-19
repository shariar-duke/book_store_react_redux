import { deleted } from "../actions";

const deleteBook = (bookId) => {

  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "DELETE",
       
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      dispatch(deleted(bookId));

    
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };
};

export default deleteBook;
