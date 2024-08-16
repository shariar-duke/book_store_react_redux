import { FaRegEdit, FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Book() {
    const backgroundImageStyle ={
        backgroundImage: `url(${"/bg.png"})`
    }
   let rating =5;
   let filledStars = Array(rating).fill(0)
   let outlinedStars = Array(Math.max(0, 5-rating)).fill(0)

  return (
    <div className="flex gap-[16px] border border-gray-100 rounded-xl shadow-xl bg-white max-h-[170px]">
      <div style={backgroundImageStyle} className="h-[170px] w-[140px] rounded-md bg-cover bg-center"></div>
      <div className=" flex-1 rounded-md p-[12px]">
        <div className="flex justify-between">
          <button className="text-whtie text-[10px] px-[14px] py-[2px] bg-[#17B169] rounded-full text-white font-bold">
            featured
          </button>
          <div className="flex gap-[4px]">
            <FaRegEdit className="cursor-pointer" />
            <RiDeleteBinLine className="cursor-pointer" />
          </div>
        </div>
        <div className="flex  items-center h-full ">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-bold">Show Horse (Deluxe Edition)</p>
            <p className="text-[12px] font-medium">Mick Donal</p>
            <div className="flex gap-[8px]">

                {
                    filledStars.map((rating , index) =>  < FaStar size={18} key={index} color="orange"/>
                    )
                }

{
                    outlinedStars.map((rating , index) =>  <IoStarOutline size={18} key={index} color="orange"/>
                    )
                }
               
                {/* <IoStarOutline size={18} color="orange" /> */}
            </div>
            <p className="text-[15px] font-extrabold text-[#17B169]">BDT 140</p>
          </div>
        </div>
      </div>
    </div>
  );
}
