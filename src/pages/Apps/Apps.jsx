import { CiSearch } from "react-icons/ci";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";

const Apps = () => {
  const appsData = useLoaderData();
  return (
    <section className="my-20 px-5 max-w-[1420px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#001931] font-bold text-5xl">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-4 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-[#001931] font-bold text-2xl">
          ({appsData.length}) Apps Found
        </h2>
        <label className="input flex items-center bg-transparent text-[#627382] text-[16px]">
          <CiSearch className="text-xl" />
          <input
            type="search"
            required
            placeholder="Search Apps"
            className="focus:outline-none"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {appsData.map((app) => (
          <Link key={app.id} to={`/apps/${app.id}`}>
            <AppCard app={app} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Apps;
