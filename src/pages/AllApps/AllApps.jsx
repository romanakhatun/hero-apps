import { Suspense, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import AppCard from "../../components/AppCard/AppCard";

const AllApps = () => {
  const appsData = useLoaderData();
  const [filteredData, setFilteredData] = useState(appsData);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const result = appsData.filter((item) =>
        item.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredData(result);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [appsData, searchVal]);

  const handleReset = () => {
    setSearchVal("");
    setFilteredData(appsData);
  };

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
          ({filteredData.length}) Apps Found
        </h2>
        <label className="input flex items-center bg-transparent text-[#627382] text-[16px]">
          <CiSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search Apps"
            className="focus:outline-none"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </label>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-[#627382] uppercase tracking-[.4em] font-extrabold">
            Loading
          </h1>
        </div>
      ) : filteredData.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {filteredData.map((app) => (
            <Link key={app.id} to={`/apps/${app.id}`}>
              <AppCard app={app} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-[#001931] font-bold text-5xl mb-4">
            App not found
          </h1>
          <button
            onClick={() => handleReset()}
            className="btn bg-gradient text-white font-semibold py-4 px-6 rounded-sm text-[16px] transition-all duration-300  hover:-translate-y-1"
          >
            Show All Apps
          </button>
        </div>
      )}
    </section>
  );
};

export default AllApps;
