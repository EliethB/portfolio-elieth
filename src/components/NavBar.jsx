import { useState } from "react";
import logo from "../img/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-black fixed top-0 z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => handleScroll("about")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="w-20 sm:w-8" src={logo} alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EliethB
          </span>
        </button>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute top-0 left-0 h-screen w-1/2 bg-gray-50 dark:bg-black p-4 md:static md:h-auto md:w-auto md:bg-transparent md:p-0`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("experience")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("education")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="block py-2 px-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
