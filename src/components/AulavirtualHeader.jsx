import React from "react";
import logoAsopebaid from "../assets/logo-asopebaid4.png";
import { useNavigate } from "react-router-dom";
/* import { LogOutIcon } from "lucide-react"; */
import { CiLogout } from "react-icons/ci";

const AulavirtualHeader = () => {
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className="fixed top-0 bg-white w-full border-b border-gray-200 px-6 flex justify-between items-center p-4 z-10">
        <img src={logoAsopebaid} alt="" className="w-64" />
        <div className="flex gap-4">
          <div className="flex items-center py-2 rounded-md ">
            <h2 className="text-gray-600"></h2>
          </div>
          {/*      <button
          className="pl-2 py-2 text-colormarcobre-300 hover:text-colormarcobre-800 hover:font-medium"
          onClick={toggleLanguage}
        >
          {language === "es" ? "English" : "Español"}
        </button> */}

          <div className="hidden md:flex md:flex-1">
            <div className="h-auto min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
          </div>

          <div className="flex items-center py-2 px-6 rounded-md w-[12rem] justify-start">
            <h2 className="text-gray-600">
              Bienvenido:
              {/* <span className="font-medium text-colormarcobre-300">
              {getDisplayName(user?.name)}
            </span> */}
            </h2>
          </div>

          <div className="hidden md:flex md:flex-1">
            <div className="h-auto min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
          </div>

          <button
            className="w-40 bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-500"
            onClick={handleLogout}
          >
            <CiLogout size={20} /> Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default AulavirtualHeader;
