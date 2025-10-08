import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="px-5 max-w-[1420px] mx-auto mt-20 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
        We Build <br /> <span className="text-gradient">Productive</span> Apps
      </h1>
      <p className="mt-4 text-[#627382] max-w-4xl text-xl">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row my-10">
        <a
          href="http://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn flex items-center py-6 px-6 text-[#001931] text-xl bg-transparent border border-[#D2D2D2] shadow-none transition-all duration-300  hover:-translate-y-1">
            <img
              className="w-[32px] h-[32px]"
              src={googlePlay}
              alt="Google Play"
            />
            Google Play
          </button>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn flex items-center py-6 px-6 text-[#001931] text-xl bg-transparent border border-[#D2D2D2] shadow-none transition-all duration-300  hover:-translate-y-1">
            <img className="w-[32px] h-[32px]" src={appStore} alt="App Store" />
            App Store
          </button>
        </a>
      </div>
      <img src={hero} alt="hero" />
    </div>
  );
};

export default Banner;
