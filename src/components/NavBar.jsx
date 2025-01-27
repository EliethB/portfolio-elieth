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
    <nav className="bg-black border-gray-200 fixed top-0 z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => handleScroll("about")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="lg:w-20 w-9" src={logo} alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            EliethB
          </span>
        </button>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          } md:block absolute top-0 left-0 h-screen w-1/2 bg-black p-4 md:static md:h-auto md:w-auto md:bg-transparent md:p-0`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("experience")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("education")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="block py-2 px-3 text-xl text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
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
