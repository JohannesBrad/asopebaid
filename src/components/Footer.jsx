import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#2c2e30] py-6">
        <div className=" max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4 md:px-8 md:py-6 text-zinc-400">
          <div className="text-left md:w-1/2 w-full">
            <h3 className="font-bold text-2xl">Asopebaid</h3>
            <p className="text-sm">
              Asociación de Padres de Familia de la Escuela de Educación
              Especial "Braulio Muñoz Cabrera"
            </p>
          </div>

          <div className="text-left md:w-1/2 w-full md:text-right">
            <h3 className="font-light text-xl pb-2">Contáctanos</h3>
            <a href="mailto:asopebaid.peru@gmail.com" className="text-sm">
              asopebaid.peru@gmail.com
            </a>
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
