const States = () => {
  return (
    <div className="text-center bg-gradient text-white py-20 px-5">
      <h2 className="text-4xl md:text-5xl font-bold">
        Trusted by Millions, Built for You
      </h2>
      <div className="flex flex-col gap-10 md:flex-row justify-around items-center md:gap-6 mt-10">
        <div>
          <p className="opacity-80">Total Downloads</p>
          <h1 className="text-5xl font-bold md:font-extrabold md:text-[64px] my-4">
            29.6M
          </h1>
          <p className="opacity-80">21% more than last month</p>
        </div>
        <div>
          <p className="opacity-80">Total Reviews</p>
          <h1 className="text-5xl font-bold md:font-extrabold md:text-[64px] my-4">
            906K
          </h1>
          <p className="opacity-80">46% more than last month</p>
        </div>
        <div>
          <p className="opacity-80">Active Apps</p>
          <h1 className="text-5xl font-bold md:font-extrabold md:text-[64px] my-4">
            132+
          </h1>
          <p className="opacity-80">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
