import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Facts from "../../components/States/States";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
  const appsData = useLoaderData();

  return (
    <div>
      <Banner />
      <Facts />
      <TrendingApps appsData={appsData} />
    </div>
  );
};

export default Home;
