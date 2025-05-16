import React from "react";
import imgHeroHome from "../assets/img_bg_2.png"; // Importa la imagen desde el archivo contHeroHome.js
import logoAsopebaid from "../assets/logo-asopebaid4.png";
import imgMisionVision from "../assets/mision-vision.png"; // Importa la imagen desde el archivo contHeroHome.js
import imgObjetivos from "../assets/objetivos.png"; // Importa la imagen desde el archivo contHeroHome.js
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Section 1 - Hero*/}
      <div>
        <div
          /* className="md:h-[700px] h-[860px] md:2xl:h-[860px] relative bg-cover bg-center top-0 overflow-hidden border-b-[14px] border-colormarcobre-200" */
          className="md:h-[700px] h-[860px] md:2xl:h-[860px] relative bg-cover top-22 overflow-hidden "
          style={{ backgroundImage: `url(${imgHeroHome})` }}
        >
          <div className="bg-slate-800/25 h-full w-full "></div>
        </div>
      </div>

      {/* Section Logo  */}
      <section className="md:pt-40">
        <div className="relative">
          <img
            src={logoAsopebaid}
            alt="Asopebaid"
            className="w-[40%] mx-auto mb-4"
          ></img>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-700 leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          ¿QUIÉNES SOMOS?
        </h2>

        <div className="text-lg">
          <p className="mb-4">
            La Asociación para el Empleo y Bienestar Animal en Investigación y
            Docencia - ASOPEBAID PERÚ, es una asociación sin fines de lucro, que
            promueve el uso adecuado y bienestar de los animales de laboratorio,
            utilizados con fines de investigación científica y docencia.
          </p>
          <p className="mb-4">
            Promovemos el fortalecimiento de los recursos humanos de
            instituciones dedicadas a la ciencia de animales de laboratorio,
            investigadores y usuarios de animales de experimentación en ética y
            bienestar animal, principios de las 3R’s, aplicación de métodos
            alternativos, el rol del técnico en bioterio, entre otros temas
            esenciales para un desempeño óptimo.
          </p>
          <p className="font-medium">
            ASOPEBAID es miembro de la Federación de Sociedades Sudamericanas de
            Ciencia de Animales de Laboratorio – <strong>FESSACAL</strong>.
          </p>
        </div>
      </section>

      {/* Section - Mision, Vision  */}
      <section className="py-8 md:py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          CONÓCENOS
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 py-4 md:py-12">
          <div className="flex flex-col gap-2 md:flex-row justify-center">
            <article className="text-center flex flex-col items-center">
              <img
                src={imgMisionVision}
                alt="img"
                className="rounded-xl w-[80%] object-cover mb-4 "
              />
              <div className="border-b ">
                <Link to="/mision-vision">
                  <h3 className="font-light text-xl title-marcobremob pb-2">
                    MISIÓN Y VISIÓN
                  </h3>
                </Link>
              </div>
            </article>

            <article className="text-center flex flex-col items-center">
              <img
                src={imgObjetivos}
                alt="img"
                className="rounded-xl w-[80%] object-cover mb-4 "
              />
              <div className="border-b ">
                <Link to="/objetivos">
                  <h3 className="font-light text-xl title-marcobremob pb-2">
                    OBJETIVOS
                  </h3>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Section - Video */}
      <section className="py-8 md:py-12 text-center bg-zinc-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          MULTIMEDIA
        </h2>
        <article className="flex flex-col my-4 items-center px-0 md:py-6 rounded-xl top-2">
          <div className="px-12">
            <iframe
              width="760"
              height="540"
              src="https://www.youtube.com/embed/vhLT2cxv5Gg?si=GLmn60uFkscaPHmB"
              //src={dataIn.urlVideo}
              title="Marcobre"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //referrerpolicy="strict-origin-when-cross-origin"

              className="w-full aspect-video"
            ></iframe>
          </div>
        </article>
      </section>
    </>
  );
};
