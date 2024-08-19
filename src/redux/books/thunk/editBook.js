import { updated } from "../actions";

 
const updateBook = (book) => {

  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${book.id}`, {
        method: "PATCH",
        body:JSON.stringify(
            book
        ),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
       
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedBook = await response.json()

      dispatch(updated(updatedBook));

    
    } catch (error) {
      console.error('Failed to update Book:', error);
    }
  };
};

export default updateBook;
