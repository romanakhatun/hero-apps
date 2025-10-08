import { Link } from "react-router";
import ErrorImg from "../../assets/App-Error.png";

const AppError = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <img src={ErrorImg} alt="Error" />
      <h1 className="text-[#001931] font-bold text-5xl">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382] mt-2 mb-4">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to="/apps"
        className="btn bg-gradient text-white font-semibold py-4 px-6 rounded-sm text-[16px] transition-all duration-300  hover:-translate-y-1"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default AppError;
