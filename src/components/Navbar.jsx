import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMail } from "react-icons/fi";
//import logoAsopebaid from "../assets/logoAsopebaid.svg"; // ajusta el path según tu proyecto
import logoAsopebaid from "../assets/logo-asopebaid4.png";
import { FaRegUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuLaptop } from "react-icons/lu";
import imgLap from "../assets/imgLaptop.jpeg";

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
      { name: "Galeria", path: "/galeria" },
    ],
  },
  {
    name: "Biblioteca",
    submenu: [
      { name: "Enlaces", path: "/enlaces" },
      { name: "Noticias", path: "/noticias" },
      { name: "Artículos", path: "/articulos" },
      { name: "COVID-19", path: "/covid" },
    ],
  },
  {
    name: "Únete a Nosotros",
    submenu: [
      { name: "Sé un miembro", path: "/unete-a-nosotros" },
      //{ name: "Donaciones", path: "/unete#donaciones" },
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

  const handleMobileLinkClick = (path) => {
    if (path && path !== "#") {
      // Solo cerrar si es un enlace real
      setOpenMobile(false);
      setActiveIndex(null);
    }
  };

  return (
    <div className="bg-white w-full shadow-md fixed z-10 transition duration-700 ease-out">
      <div className="w-full bg-[#1d4999] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-end items-start gap-2 md:gap-4">
          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100065233221516&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/asopebaid?igsh=MWI2MTRrazdjcjV1MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:asopebaid.peru@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FiMail size={18} />
            asopebaid.peru@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center py-5"> */}
        <div className="flex items-center justify-between py-3 px-4 md:px-0">
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
                  onClick={() => handleMobileLinkClick(link.path)}
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
                            onClick={() => handleMobileLinkClick(link.path)}
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
          <div>
            <div className="space-y-1">
              <div
                className="hidden md:flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg aspect-auto"
                style={{ backgroundImage: `url(${imgLap})` }}
              >
                <Link
                  to="https://forms.gle/wNk59Po3b7HEpmBj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/70 hover:bg-[#153a7a]/80 text-white px-6 py-2 rounded-md text-sm flex items-center transition duration-300 shadow-md"
                >
                  <LuLaptop size={18} />
                  <span className="ml-2 font-normal tracking-wide uppercase">
                    CURSOS ASOPEBAID
                  </span>
                </Link>
              </div>
              <Link
                to="/login"
                onClick={() => handleMobileLinkClick(link.path)}
                className="hidden md:flex items-center justify-center bg-[#1d4999] text-white px-5 md:py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                <FaRegUser />
                <span className="ml-2">Iniciar sesión</span>
              </Link>
            </div>
          </div>

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
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              openMobile ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
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
                  <ul className="md:pl-6 md:space-y-2 overflow-hidden">
                    {link.submenu.map((sublink, i) => (
                      <li key={i}>
                        <Link
                          to={sublink.path}
                          className="pl-6 block text-[#1d4999] text-md hover:underline bg-blue-100 py-3 border-b border-blue-200"
                          onClick={handleMobileLinkClick}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div>
              <div className="px-4">
                <div
                  className="md:hidden flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg aspect-auto"
                  style={{ backgroundImage: `url(${imgLap})` }}
                >
                  <Link
                    to="https://forms.gle/wNk59Po3b7HEpmBj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center bg-gray-800/70 hover:bg-[#153a7a]/80 text-white px-6 py-3 rounded-md text-sm flex items-center transition duration-300 shadow-md"
                  >
                    <LuLaptop size={18} />
                    <span className="ml-2 font-normal tracking-wide uppercase">
                      CURSOS ASOPEBAID
                    </span>
                  </Link>
                </div>
              </div>
              <div className="px-4 pt-2 mb-4">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 w-full bg-[#1d4999] text-white font-medium text-sm py-3 rounded-lg shadow-sm hover:bg-[#153a7a] transition-all duration-300"
                >
                  <FaRegUser className="text-base" />
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
