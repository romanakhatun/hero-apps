import { FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const Links = [
    { to: "/", label: "Home" },
    { to: "/apps", label: "Apps" },
    { to: "/installation", label: "Installation" },
  ];
  return (
    <div className=" border-b border-[#e9e9e9]">
      <div className="navbar py-4 px-5 max-w-[1420px] mx-auto">
        <div className="navbar-start flex items-center gap-6">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden"
            >
              <FiMenu className="text-[#632ee3] text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
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

          <NavLink
            to="/"
            className="font-bold text-2xl text-gradient flex items-center gap-1"
          >
            <img className="w-[40px] h-[40px]" src={logo} alt="HERO.IO" />
            <span className="hidden sm:block">HERO.IO</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">
            {Links.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-underline text-gradient " : " "
                  }
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/romanakhatun"
            className="btn bg-gradient text-white font-semibold py-3 rounded-sm"
          >
            <FaGithub className="text-xl" />
            <span className="text-[16px]">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
