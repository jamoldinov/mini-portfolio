import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useState, useEffect } from "react";


const themes = {
  autumn: 'forest',
  halloween: 'winter'
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.light);
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { autumn, halloween } = themes;
    const newTheme = theme === halloween ? autumn : halloween;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

//   const { numItemsInCart } = useSelector((state) => state.cartState);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar mx-auto max-w-6xl px-8 ">
        <div className="navbar-start">
          {/* <Navlinks
            to="/"
            className="hidden btn lg:flex btn-primary text-3xl items-center"
          >
            c
          </Navlinks> */}
          <Link to="/" className="btn btn-primary hidden lg:inline-block pt-4">
            {/* <img src="./img/image.png" alt="" /> */}
            kamolxon
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-200"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
