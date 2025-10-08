import { Link } from "react-router";
import AppCard from "../AppCard/AppCard";

const TrendingApps = ({ appsData }) => {
  const topApps = appsData
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);
  return (
    <section className="my-20 px-5 max-w-[1420px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#001931] font-bold text-5xl">Trending Apps</h1>
        <p className="text-[#627382] mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {topApps.map((app) => (
          <Link key={app.id} to={`/apps/${app.id}`}>
            <AppCard app={app} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/apps"
          className="btn bg-gradient text-white font-semibold py-4 px-6 rounded-sm text-[16px] transition-all duration-300  hover:-translate-y-1"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
