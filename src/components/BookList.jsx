import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import Book from "./Book";
// eslint-disable-next-line react/prop-types
export default function BookList({setEditBook}) {

  const books = useSelector((state) => state.books) || [];
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState("all");
  const handleFilter = (option) => {
    setFilterOption(option);
  };

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold">Book List</p>
        <div className="flex gap-[10px]">
          <button
            onClick={() => handleFilter("all")}
            className={`${
              filterOption === "all"
                ? "bg-[#17B169] text-white"
                : "bg-white text-gray-700"
            }  border-[1px] border-[#17B169]  rounded-full px-[24px] py-[4px] text-[14px] font-bold `}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("featured")}
            className={`${
              filterOption === "featured"
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
          {books && books.map((book) => <Book setEditBook ={setEditBook} key={book.id} book={book} />)}
        </div>
      </div>
    </div>
  );
}
