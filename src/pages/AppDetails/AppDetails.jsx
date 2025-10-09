import { useLoaderData, useParams } from "react-router";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import AppError from "../AppError/AppError";
import downloadIcon from "../../assets/download.png";
import reviewIcon from "../../assets/review.png";
import ratingsIcon from "../../assets/ratings.png";
import { addToStoreApps, getStoreApps } from "../../utilities/instAppsToLS";
import { useState } from "react";

const AppDetails = () => {
  const [installedApps, setInstalledApps] = useState(
    getStoreApps().map((id) => parseInt(id))
  );
  const { id } = useParams();
  const appId = parseInt(id);
  const appData = useLoaderData();

  const app = appData.find((app) => app.id === appId);
  if (!app) {
    return <AppError />;
  }
  const {
    image,
    title,
    ratingAvg,
    reviews,
    downloads,
    description,
    size,
    companyName,
    ratings,
  } = app || {};

  const handleInstall = (id, title) => {
    addToStoreApps(id, title);
    setInstalledApps(getStoreApps().map((id) => parseInt(id)));
  };

  return (
    <section className="my-20 px-5 max-w-[1420px] mx-auto">
      <div className="flex gap-10 flex-col md:flex-row">
        <figure>
          <img
            className="shadow-[0_10px_20px_-12px_rgba(0,0,0,0.1)] lg:h-[350px]"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex-grow">
          <h2 className="text-[32px] font-bold text-[#001931]">{title}</h2>
          <p>
            <span className=" text-[#627382]">Developed by </span>
            <span className="text-[#632ee3] font-bold">{companyName}</span>
          </p>
          <hr className="my-7 border-[#001931] opacity-20" />
          <div className="flex justify-between md:justify-normal  md:gap-8 my-7">
            <div>
              <img src={downloadIcon} alt="Download" />
              <p className="my-2 text-[#001931] opacity-80">Downloads </p>
              <h1 className="text-[40px] font-extrabold ">{downloads}M</h1>
            </div>
            <div>
              <img src={ratingsIcon} alt="Ratings" />
              <p className="my-2 text-[#001931] opacity-80">Average Ratings </p>
              <h1 className="text-[40px] font-extrabold ">{ratingAvg}</h1>
            </div>
            <div>
              <img src={reviewIcon} alt="Review" />
              <p className="my-2 text-[#001931] opacity-80">Total Reviews </p>
              <h1 className="text-[40px] font-extrabold ">{reviews}</h1>
            </div>
          </div>
          <button
            disabled={installedApps.includes(appId)}
            onClick={() => handleInstall(id, title)}
            className="btn border-0 bg-[#00D390] text-white"
          >
            {installedApps.includes(appId)
              ? "Installed"
              : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="my-7 border-[#001931] opacity-20" />
      <h3 className="text-[#001931] text-2xl font-semibold mb-6">Ratings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={600}
          height={300}
          data={ratings}
          layout="vertical"
          barGap={24}
        >
          <XAxis
            type="number"
            dataKey="count"
            axisLine={false}
            tickLine={false}
            tick={true}
          />

          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={true}
            reversed={true}
          />
          <Bar dataKey="count" fill="#FF8811" barSize={32} />
        </BarChart>
      </ResponsiveContainer>
      <hr className="my-7 border-[#001931] opacity-20" />
      <h3 className="text-[#001931] text-2xl font-semibold mb-6">
        Description
      </h3>
      <p className="text-[#627382]">{description}</p>
    </section>
  );
};

export default AppDetails;
