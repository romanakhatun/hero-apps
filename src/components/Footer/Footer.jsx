import { NavLink } from "react-router";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
  const Links = [
    { to: "/", label: "Home" },
    { to: "/apps", label: "Apps" },
    { to: "/installation", label: "Installation" },
  ];
  return (
    <div>
      <footer className="bg-[#001931] text-gray-300 pt-[35px] pb-[30px] px-6">
        <div className="py-4 px-5 max-w-[1420px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <NavLink
              to="/"
              className="font-bold text-2xl text-white flex items-center gap-1"
            >
              <img className="w-[40px] h-[40px]" src={logo} alt="HERO.IO" />
              <span className="hidden sm:block">HERO.IO</span>
            </NavLink>
            <p className="text-sm mt-2">
              Discover & install amazing tools in one place.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {Links.map((link) => (
                <li key={link.to} className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-gradient " : " "
                    }
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              Social Links
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-[20px] h-[20px] bg-white text-black rounded-full flex items-center justify-center"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="#"
                className="w-[20px] h-[20px] bg-white text-black rounded-full flex items-center justify-center"
              >
                <RiLinkedinFill />
              </a>
              <a href="#">
                <MdFacebook className="text-[22px] text-white" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center  ">Copyright © 2025 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
