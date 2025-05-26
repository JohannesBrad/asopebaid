import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#2c2e30] py-8 px-4 text-zinc-300">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 px-4 md:px-8">
          {/* Columna 1 - Info */}
          <div className="md:w-1/2">
            <h3 className="font-bold text-2xl text-white">Asopebaid</h3>
            <p className="text-sm mt-2 max-w-sm leading-relaxed">
              Asociación para el empleo y bienestar de animales en investigación
              y docencia.
            </p>
          </div>

          {/* Columna 2 - Contacto */}
          <div className="md:w-1/2 w-full text-left md:text-right">
            <h3 className="font-light text-xl text-white pb-2">Contáctanos</h3>
            <a
              href="mailto:asopebaid.peru@gmail.com"
              className="text-sm underline hover:text-white transition"
            >
              asopebaid.peru@gmail.com
            </a>
            <div className="flex md:justify-end items-center gap-4 pt-5">
              <a
                href="https://www.facebook.com/profile.php?id=100065233221516&locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/asopebaid?igsh=MWI2MTRrazdjcjV1MQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 text-center text-sm py-2">
        <p className="font-light text-zinc-400 py-1">
          © 2025 ASOPEBAID | Todos los Derechos Reservados.
        </p>
      </div>
    </>
  );
};
