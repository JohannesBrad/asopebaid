import React from "react";
import imgHeroHome from "../assets/img_bg_2.png"; // Importa la imagen desde el archivo contHeroHome.js
import logoAsopebaid from "../assets/logo-asopebaid4.png";
import imgMisionVision from "../assets/mision-vision.png"; // Importa la imagen desde el archivo contHeroHome.js
import imgObjetivos from "../assets/objetivos.png"; // Importa la imagen desde el archivo contHeroHome.js
import { NavLink, Link } from "react-router-dom";
import { useAsopebaidData } from "../hooks/useAsopebaidData";

export const Home = () => {
  const { data } = useAsopebaidData();
  const dataEvents = data
    .filter((item) => {
      return item.tipo === "evento-asopebaid";
    })
    .slice(0, 3);

  return (
    <>
      {/* Section 1 - Hero*/}
      <div>
        <div
          /* className="md:h-[700px] h-[860px] md:2xl:h-[860px] relative bg-cover bg-center top-0 overflow-hidden border-b-[14px] border-colormarcobre-200" */
          className=" md:h-[700px] md:2xl:h-[860px] md:bg-cover md:top-22
          relative 
          
          h-80 bg-contain bg-no-repeat  overflow-hidden top-[7rem]"
          style={{ backgroundImage: `url(${imgHeroHome})` }}
        >
          <div className="bg-slate-800/10 h-[11rem] md:h-full md:w-full "></div>
        </div>
      </div>

      {/* Section Logo  */}
      <section className="-pt-12 md:pt-40 md:pb-8 bg-[#f9fafb]">
        <div className="">
          <img
            src={logoAsopebaid}
            alt="Asopebaid"
            className="w-3/4 md:w-[40%] mx-auto mb-4 max-w-xs"
            loading="lazy"
          ></img>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-700 leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
            ¿Quiénes somos?
          </h2>

          <div className="text-lg">
            <p className="mb-4">
              La Asociación para el Empleo y Bienestar Animal en Investigación y
              Docencia - ASOPEBAID PERÚ, es una asociación sin fines de lucro,
              que promueve el uso adecuado y bienestar de los animales de
              laboratorio, utilizados con fines de investigación científica y
              docencia.
            </p>
            <p className="mb-4">
              Promovemos el fortalecimiento de los recursos humanos de
              instituciones dedicadas a la ciencia de animales de laboratorio,
              investigadores y usuarios de animales de experimentación en ética
              y bienestar animal, principios de las 3R’s, aplicación de métodos
              alternativos, el rol del técnico en bioterio, entre otros temas
              esenciales para un desempeño óptimo.
            </p>
            <p className="font-medium">
              ASOPEBAID es miembro de la Federación de Sociedades Sudamericanas
              de Ciencia de Animales de Laboratorio – <strong>FESSACAL</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Mision, Vision  */}
      <section className="py-8 md:py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] ">
          Conócenos
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 py-4 md:py-12">
          <div className="flex flex-col gap-2 md:flex-row justify-center">
            <article className="text-center flex flex-col items-center">
              <img
                src={imgMisionVision}
                alt="img"
                loading="lazy"
                className="rounded-xl w-[80%] object-cover mb-4 "
              />
              <div className="border-b-2 border-[#1d4999]">
                <Link to="/mision-vision">
                  <h3 className="font-light text-xl text-[#1d4999] pb-2">
                    MISIÓN Y VISIÓN
                  </h3>
                </Link>
              </div>
            </article>

            <article className="text-center flex flex-col items-center">
              <img
                src={imgObjetivos}
                alt="img"
                loading="lazy"
                className="rounded-xl w-[80%] object-cover mb-4 "
              />
              <div className="border-b-2 border-[#1d4999]">
                <Link to="/objetivos">
                  <h3 className="font-light text-xl text-[#1d4999] pb-2">
                    OBJETIVOS
                  </h3>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Section -Eventos */}
      <section className="py-8 md:py-8 text-center bg-[#f9fafb] pb-6">
        <div className="max-w-screen-xl mx-auto px-8 pb-10 pt-6 ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-8">
            Eventos
          </h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-white">
            {dataEvents.map((item) => {
              return (
                <article
                  key={item.id}
                  className="w-96 text-left rounded-xl overflow-hidden hover:scale-105 transition-all shadow-sm bg-white"
                >
                  <div className="relative w-full aspect-square bg-white rounded-t-xl overflow-hidden">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-5 py-2 text-zinc-700">
                    <h2 className="text-xl font-semibol d">{item.nombre}</h2>
                    <p className="text-lg py-2 font-light">
                      {item.descripcion}
                    </p>
                    <div>
                      <p className="text-lg py-1 font-medium text-[#1d4999]">
                        {item.fecha}
                      </p>
                      <p className="text-md py-1 font-light">{item.lugar}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-sm text-gray-500 py-3 block font-medium hover:underline"
                      >
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <NavLink to="/eventos-asopebaid">Ver más evento</NavLink>
      </section>
      {/* Section - Video */}
      {/*       <section className="py-10 md:py-16 bg-zinc-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-8">
          Multimedia
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/vhLT2cxv5Gg?si=GLmn60uFkscaPHmB"
              title="Video institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
};
