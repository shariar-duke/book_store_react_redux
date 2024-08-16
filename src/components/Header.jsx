import { IoSearch } from "react-icons/io5";
export default function Header() {
  return (
    <div className="flex justify-between w-[92%] py-[10px] items-center">
      <div className="text-center">
        <span className="text-[20px] text-gray-900 font-bold italic">Book</span>
        <span className="text-[20px] text-gray-700 italic">Store</span>
        <div className="bg-[#6b7909] py-[1px]"></div>{" "}
     
      </div>
      <div className="flex gap-[10px]">
        <p className="text-[14px] font-bold cursor-pointer">Book Store</p>
        <p className="text-[14px] font-medium cursor-pointer text-gray-700">WishList</p>
        <p className="text-[14px] cursor-pointer font-medium cursor-pointer text-gray-700">My Collection</p>
      </div>
      <div>
       <div className="rounded-full flex justify-center  items-center bg-white px-[8px] ">
         <input type="text" placeholder="search" className="placeholder:text-[14px] border-none outline-none w-[170px] rounded-full px-[14px] py-[4px]" />

         <IoSearch size={16} className="text-center text-gray-400 cursor-pointer pr-[2px]"/>
       </div>
      </div>
    </div>
  );
}

