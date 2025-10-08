import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isLoading && (
        <div className="fixed inset-0 bg-[#d9d9d9] flex items-center justify-center z-50">
          <h1 className="text-2xl text-[#627382] uppercase tracking-[.4em] font-extrabold">
            Loading
          </h1>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
