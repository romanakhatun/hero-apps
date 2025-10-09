import React from "react";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;

  return (
    <div className="p-4 shadow-[0_10px_20px_-12px_rgba(0,0,0,0.1)] rounded-lg bg-white transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
      <figure className=" flex justify-center items-center ">
        <img className="h-48 w-full object-contain" src={image} alt={title} />
      </figure>
      <h3 className="text-[#001931] text-xl font-medium my-4 flex-grow">
        {title}
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[#00D390] bg-[#F1F5E8] py-[6px] px-[10px] rounded gap-1 font-medium">
          <FiDownload />
          {downloads}M
        </div>
        <div className="flex items-center text-[#FF8811] bg-[#FFF0E1] py-[6px] px-[10px] rounded gap-1 font-medium">
          <IoIosStar />
          {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
