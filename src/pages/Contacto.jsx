import React from "react";
import { FiMail } from "react-icons/fi";
import imgContact from "../assets/2148882105.jpg"; // Ajusta el path según tu proyecto

export const Contacto = () => {
  return (
    <section className="py-8 md:pt-[12rem] bg-[#f9fafb] ">
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
              ¿Deseas ponerte en contacto con nosotros?
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Estamos aquí para resolver tus dudas, brindarte más información
              sobre nuestros programas o colaboraciones, y atender cualquier
              consulta relacionada al bienestar y uso ético de animales en la
              investigación y la docencia.
            </p>

            <div className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-lg text-[#1d4999] font-medium">
              <FiMail className="text-xl" />
              <a
                href="mailto:asopebaid.peru@gmail.com"
                className="hover:underline"
              >
                asopebaid.peru@gmail.com
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              //src="https://cdn-icons-png.flaticon.com/512/3771/3771518.png"
              src={imgContact}
              alt="Contacto"
              className=" rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
