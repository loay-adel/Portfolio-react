import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Use useCallback to prevent unnecessary re-renders
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  }, []);

  useEffect(() => {
    // Set initial theme without causing reflow
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);

    // Debounced resize handler
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [handleResize]);

  useEffect(() => {
    // Batch DOM updates
    const updateTheme = () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    };

    // Use requestAnimationFrame to batch style changes
    requestAnimationFrame(updateTheme);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const navList = useMemo(
    () => (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li>
          <a
            href="/"
            className="p-1 font-medium text-blue-gray-900 dark:text-white focus:outline-none  hover:text-primaryCyan-500 rounded transition-colors"
            aria-label="Navigate to home section"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="p-1 font-medium text-blue-gray-900 dark:text-white focus:outline-none  hover:text-primaryCyan-500 rounded transition-colors"
            aria-label="Navigate to projects section"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="p-1 font-medium text-blue-gray-900 dark:text-white focus:outline-none  hover:text-primaryCyan-500 rounded transition-colors"
            aria-label="Navigate to testimonials section"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="p-1 font-medium text-blue-gray-900 dark:text-white focus:outline-none  hover:text-primaryCyan-500 rounded transition-colors"
            aria-label="Navigate to contact section"
          >
            Contact
          </a>
        </li>
      </ul>
    ),
    []
  );

  return (
    <Navbar
      fullWidth
      className="w-full px-4 py-2 lg:px-8 lg:py-4 border-none dark:bg-black bg-white"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="mr-4 cursor-pointer h-10 border-0 focus:outline-none  hover:text-primaryCyan-500 rounded"
          aria-label="Home page"
        >
          <div className="flex justify-start items-center pt-2 h-10">
            <img
              src={darkMode ? "mylogo.webp" : "mylogo-white.webp"}
              alt="Loay Adel Portfolio Logo"
              className="h-full w-auto max-h-[60px] object-contain scale-125"
              loading="eager"
            />
          </div>
        </a>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="hidden lg:flex items-center gap-4">
          <IconButton
            variant="text"
            onClick={toggleDarkMode}
            className="dark:text-white text-blue-gray-900"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <IconButton
            variant="text"
            onClick={toggleDarkMode}
            className="dark:text-white text-blue-gray-900"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <IconButton
            variant="text"
            className="lg:hidden dark:text-white text-blue-gray-900"
            onClick={() => setOpenNav(!openNav)}
            aria-expanded={openNav}
            aria-label={
              openNav ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {openNav ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Header;
