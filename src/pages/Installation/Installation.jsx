import React from "react";
import InstallCard from "../../components/InstallCard/InstallCard";

const Installation = () => {
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
        <h2 className="text-[#001931] font-bold text-2xl"> Apps Found</h2>
        <details className="dropdown dropdown-end text-[#627382] bg-transparent">
          <summary className="btn m-1">Sort By Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="space-y-4">
        <InstallCard />
        <InstallCard />
      </div>
    </section>
  );
};

export default Installation;
