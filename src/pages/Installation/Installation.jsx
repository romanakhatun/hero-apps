import { useLoaderData } from "react-router";
import InstallCard from "../../components/InstallCard/InstallCard";
import { useEffect, useState } from "react";
import { getStoreApps, removeStoreApps } from "../../utilities/instAppsToLS";

const Installation = () => {
  const [instApps, setInstApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const installedApps = getStoreApps();
    const cInstApps = installedApps.map((id) => parseInt(id));
    const myInstApps = data.filter((book) => cInstApps.includes(book.id));
    setInstApps(myInstApps);
  }, [data]);

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedApps = [...instApps];

    if (order === "low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    if (order === "high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }
    setInstApps(sortedApps);
  };

  const handleRemoveInstApps = (id, title) => {
    removeStoreApps(id, title);
    setInstApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  return (
    <section className="my-20 px-5 max-w-[1420px] mx-auto">
      <div className="text-center">
        <h1 className="text-[#001931] font-bold text-5xl">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mb-[21px]">
        <h2 className="text-[#001931] font-bold text-2xl">
          {instApps.length} Apps Found
        </h2>
        <div className="flex items-center space-x-2">
          <select
            id="sort"
            className="border border-[#627382] rounded-lg px-3 py-2 focus:outline-none  text-gray-700"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="low-high">Low - High</option>
            <option value="high-low">High - Low</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {instApps.map((app) => (
          <InstallCard
            app={app}
            key={app.id}
            handleRemoveInstApps={handleRemoveInstApps}
          />
        ))}
      </div>
    </section>
  );
};

export default Installation;
