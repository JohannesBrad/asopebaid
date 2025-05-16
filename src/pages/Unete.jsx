import React from "react";
import { Link } from "react-router-dom";
import imgUnete from "../assets/2150760522.jpg";

export const Unete = () => {
  return (
    <section className="py-8 md:pt-[12rem] bg-[#f9fafb] ">
      <div className="min-h-screen bg-[#f9fafb] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
              Únase a nosotros
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Únete a <strong>ASOPEBAID</strong> y sé parte del desarrollo de la
              Ciencia de Animales de Laboratorio, promoviendo el uso adecuado y
              el bienestar de los animales empleados en investigación científica
              y docencia.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Para ser miembro, completa nuestro formulario de membresía y forma
              parte de una comunidad comprometida con la ética, la ciencia y el
              bienestar animal.
            </p>

            <div className="bg-white shadow-md rounded-xl p-5 mb-6">
              <h3 className="text-lg font-semibold text-[#1d4999] mb-2">
                ¿Quiénes pueden ser miembros?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Profesionales de las ciencias de la salud, investigadores y
                personal técnico usuario de animales de laboratorio en
                investigación y docencia.
              </p>
            </div>

            <Link
              to="/registro"
              className="inline-block bg-[#1d4999] hover:bg-[#153a7a] text-white font-semibold text-center py-3 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Completar formulario de membresía
            </Link>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              // src="https://cdn.pixabay.com/photo/2020/02/19/14/01/laboratory-4866174_960_720.jpg"
              src={imgUnete}
              alt="Laboratorio"
              className=" rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
