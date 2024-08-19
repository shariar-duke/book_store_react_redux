import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import { filterBook } from "../redux/searchAndFilter/action";
import Book from "./Book";
// eslint-disable-next-line react/prop-types
export default function BookList({ setEditBook }) {
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState(false);
  const handleFilter = (option) => {
    setFilterOption(option);
    dispatch(filterBook(option));
  };
  const books = useSelector((state) => state.books) || [];
  const searchAndFilter = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);


  // filter by bookName 

 console.log("The state and filter is", searchAndFilter?.searchText)
 const handleFilterByBookName = (book) => {
    // Always return a boolean: true to include, false to exclude
    return searchAndFilter.searchText?.length > 0 ? 
           book.name.toLowerCase().includes(searchAndFilter.searchText.toLowerCase()) : 
           true;
  }

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold">Book List</p>
        <div className="flex gap-[10px]">
          <button
            onClick={() => handleFilter(false)}
            className={`${
              filterOption === false
                ? "bg-[#17B169] text-white"
                : "bg-white text-gray-700"
            }  border-[1px] border-[#17B169]  rounded-full px-[24px] py-[4px] text-[14px] font-bold `}
          >
            All
          </button>
          <button
            onClick={() => handleFilter(true)}
            className={`${
              filterOption === true
                ? "bg-[#17B169] text-white"
                : "bg-white text-gray-700"
            } border-[1px] border-[#17B169] rounded-full px-[24px] py-[4px] text-[14px] font-bold `}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="pb-[28px] max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-2 gap-[20px] pr-[10px] py-[20px]">
        {books
            .filter((book) => (filterOption ? book.featured : true)).filter(handleFilterByBookName)
            .map((book) => (
              <Book setEditBook={setEditBook} key={book.id} book={book} />
            ))}
        </div>
      </div>
    </div>
  );
}
