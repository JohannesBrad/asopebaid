import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMail } from "react-icons/fi";
//import logoAsopebaid from "../assets/logoAsopebaid.svg"; // ajusta el path según tu proyecto
import logoAsopebaid from "../assets/logo-asopebaid4.png";

const links = [
  { name: "Principal", path: "/" },
  {
    name: "Nosotros",
    submenu: [
      { name: "Directiva", path: "/directiva" },
      { name: "Miembros", path: "/miembros" },
      //{ name: "Socios", path: "/nosotros#socios" },
    ],
  },
  {
    name: "Eventos",
    submenu: [
      { name: "Nacionales", path: "/eventos-nacionales" },
      { name: "Internacionales", path: "/eventos-internacionales" },
      { name: "ASOPEBAID", path: "/eventos-asopebaid" },
    ],
  },
  {
    name: "Biblioteca",
    submenu: [
      { name: "Enlaces", path: "/enlaces" },
      { name: "Noticias", path: "/noticias" },
      { name: "Artículos", path: "/articulos" },
    ],
  },
  {
    name: "Únete a Nosotros",
    submenu: [
      { name: "Sé un miembro", path: "/unete#miembro" },
      { name: "Donaciones", path: "/unete#donaciones" },
    ],
  },
  { name: "Contacto", path: "/contacto" },
];

export const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMobile = () => setOpenMobile(!openMobile);
  const toggleSubmenu = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="bg-white w-full shadow-md fixed z-10 transition duration-700 ease-out">
      <div className="w-full bg-[#1d4999]">
        <div className="max-w-7xl mx-auto py-2 justify-end flex">
          <span className="text-gray-300 font-light text-sm text-left ">
            asopebaid.peru@gmail.com | <FiMail className="inline" />{" "}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <NavLink to="/" className="flex items-center">
              <img
                src={logoAsopebaid}
                alt="Asopebaid"
                className="w-[14rem] md:w-64"
              />
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  to={link.path || "#"}
                  className="text-blue-900 hover:text-blue-600 transition duration-300 uppercase text-sm flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && (
                    <FiChevronDown className="transition-transform group-hover:rotate-180 " />
                  )}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                    <ul className="py-2 min-w-[180px]">
                      {link.submenu.map((sublink, i) => (
                        <li key={i}>
                          <Link
                            to={sublink.path}
                            className="block px-4 py-2 hover:bg-blue-100 text-sm text-blue-900"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMobile} className="text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    openMobile
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {openMobile && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center px-2 py-2"
                  onClick={() => link.submenu && toggleSubmenu(index)}
                >
                  <Link
                    to={link.path || "#"}
                    className="text-blue-900 text-sm uppercase"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <FiChevronDown
                      className={`transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {link.submenu && activeIndex === index && (
                  <ul className="pl-6 space-y-2">
                    {link.submenu.map((sublink, i) => (
                      <li key={i}>
                        <Link
                          to={sublink.path}
                          className="block text-blue-800 text-sm hover:underline"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
