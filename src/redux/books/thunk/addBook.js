import { added } from "../actions";


const addBook = (book) => 
{
    return async (dispatch) => 
    {
        try{
            const response = await fetch("http://localhost:9000/books", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                  },
                body:JSON.stringify({...book})} )

            if(!response.ok) 
            {
                throw new Error("Network response was not ok")
            }

            const addedBook = await response.json()
            if(addedBook) 
            {
                dispatch(added(addedBook))
            }
                
      
        }catch(error) 
        {
            console.error('Failed to add todo:', error);
        }
    }
}

export default addBook