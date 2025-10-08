import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import demoApp from "../../assets/demo-app.webp";

const InstallCard = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center py-6 px-4 rounded-sm">
      <div className="flex gap-4 flex-col md:flex-row">
        <figure>
          <img className="h-[80px] rounded-lg" src={demoApp} alt="" />
        </figure>
        <div>
          <h3 className="text-[#001931] text-xl">
            Forest: Focus for Productivity
          </h3>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center text-[#00D390] gap-1 font-medium">
              <FiDownload />
              Download
            </div>
            <div className="flex items-center text-[#FF8811] gap-1 font-medium">
              <IoIosStar />
              Rating
            </div>
            <p>258 MB</p>
          </div>
        </div>
      </div>
      <button className="btn border-0 bg-[#00D390] text-white mt-5 md:mt-0">
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
