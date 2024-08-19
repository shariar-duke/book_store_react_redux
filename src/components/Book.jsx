/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaRegEdit, FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import deleteBook from "../redux/books/thunk/deleteBooks";

export default function Book({book , setEditBook}) {


    const dispatch = useDispatch()
    const { id, author, featured, name, price, rating, thumbnail} = book
    const backgroundImageStyle ={
        backgroundImage: `url(${book?.thumbnail ?? " "})`
    }

   console.log("The rating is", rating)
   const filledStars = Array(Number(rating)).fill(0);
   const outlinedStars = Array(Number(5 - rating)).fill(0);
   

   console.log("filteredStars are", filledStars)
   console.log("All the outlineStars are", outlinedStars)

   const deleteBookHandler =()=> 
   {
    dispatch(deleteBook(id))
   }

   const handleBookEdit =() => 
   {
    setEditBook(book)
    console.log("The book I want to edit",book)
   }

  return (
    <div className="flex gap-[16px] border border-gray-100 rounded-xl shadow-xl bg-white max-h-[170px]">
      <div style={backgroundImageStyle} className="h-[170px] w-[140px] rounded-md bg-cover bg-center"></div>
      <div className=" flex-1 rounded-md p-[12px]">
        <div className="flex justify-between">
           
          <button className={` ${!featured && "invisible"} text-whtie text-[10px] px-[14px] py-[2px] bg-[#17B169] rounded-full text-white font-bold`}>
            featured
          </button>
          <div className="flex gap-[4px]">
            <FaRegEdit onClick={handleBookEdit} className="cursor-pointer" />
            <RiDeleteBinLine onClick={deleteBookHandler} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex  items-center h-full ">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-bold">{name}</p>
            <p className="text-[12px] font-medium">{author}</p>
            <div className="flex gap-[8px]">

                {
                  filledStars &&  filledStars.map((rating , index) =>  < FaStar size={18} key={index} color="orange"/>
                    )
                }

{
                 outlinedStars &&   outlinedStars.map((rating , index) =>  <IoStarOutline size={18} key={index} color="orange"/>
                    )
                }
               
                {/* <IoStarOutline size={18} color="orange" /> */}
            </div>
            <p className="text-[15px] font-extrabold text-[#17B169]">BDT {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
