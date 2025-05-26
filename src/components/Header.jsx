import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars4, HiMiniXMark } from "react-icons/hi2";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium dark:text-white"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/cart"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium dark:text-white"
      >
        Cart
      </Typography>
      <Typography
        as={Link}
        to="/table"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium dark:text-white"
      >
        Table
      </Typography>
    </ul>
  );

  return (
    <Navbar
      fullWidth
      className="w-full px-4 py-2 lg:px-8 lg:py-4 border-none dark:bg-black"
    >
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer font-medium h-10 border-0"
        >
          <div className="flex justify-start items-center pt-2 h-10">
            <img
              src={darkMode ? "mylogo.png" : "mylogo-white.png"}
              alt="Our Logo"
              className="h-full w-auto max-h-[60px] object-contain scale-125"
            />
          </div>
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="hidden lg:flex items-center gap-4">
          <IconButton
            variant="text"
            onClick={toggleDarkMode}
            className="dark:text-white"
          >
            {darkMode ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="h-5 w-5" />
            )}
          </IconButton>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <IconButton
            variant="text"
            onClick={toggleDarkMode}
            className="dark:text-white"
          >
            {darkMode ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="h-5 w-5" />
            )}
          </IconButton>
          <IconButton
            variant="text"
            className="lg:hidden dark:text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiMiniXMark className="h-6 w-6" strokeWidth={2} />
            ) : (
              <HiOutlineBars4 className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Header;
