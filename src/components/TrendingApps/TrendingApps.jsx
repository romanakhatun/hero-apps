import { Link } from "react-router";
import AppCard from "../AppCard/AppCard";

const TrendingApps = () => {
  return (
    <section className="my-20 px-5 max-w-[1420px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#001931] font-bold text-5xl">Trending Apps</h1>
        <p className="text-[#627382] mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <AppCard />

      <div className="flex justify-center mt-10">
        <Link
          to="/apps"
          className="btn bg-gradient text-white font-semibold py-4 px-6 rounded-sm text-[16px]"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
