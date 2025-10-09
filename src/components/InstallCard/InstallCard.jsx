import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

const InstallCard = ({ app, handleRemoveInstApps }) => {
  const { image, title, ratingAvg, downloads, size, id } = app;

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center py-6 px-4 rounded-sm">
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <figure>
          <img className="h-[80px] rounded-lg" src={image} alt={title} />
        </figure>
        <div>
          <h3 className="text-[#001931] text-xl">{title}</h3>
          <div className="flex justify-center md:justify-normal gap-4 mt-4">
            <div className="flex items-center text-[#00D390] gap-1 font-medium">
              <FiDownload />
              {downloads}M
            </div>
            <div className="flex items-center text-[#FF8811] gap-1 font-medium">
              <IoIosStar />
              {ratingAvg}
            </div>
            <p>{size} MB</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleRemoveInstApps(id, title)}
        className="btn border-0 bg-[#00D390] text-white mt-5 md:mt-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
