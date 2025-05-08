import React from "react";
import imgHeroHome from "../assets/img_bg_2.png"; // Importa la imagen desde el archivo contHeroHome.js
import logoAsopebaid from "../assets/logo-asopebaid4.png";
import imgMisionVision from "../assets/mision-vision.png"; // Importa la imagen desde el archivo contHeroHome.js
import imgObjetivos from "../assets/objetivos.png"; // Importa la imagen desde el archivo contHeroHome.js

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
            className="w-[50%] mx-auto mb-4"
          ></img>
        </div>
      </section>

      {/* Section - Mision, Vision  */}
      <section className="py-8 md:py-12 text-center">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
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
                <h3 className="font-light text-xl title-marcobremob pb-2">
                  MISIÓN Y VISIÓN
                </h3>
              </div>
            </article>

            <article className="text-center flex flex-col items-center">
              <img
                src={imgObjetivos}
                alt="img"
                className="rounded-xl w-[80%] object-cover mb-4 "
              />
              <div className="border-b ">
                <h3 className="font-light text-xl title-marcobremob pb-2">
                  OBJETIVOS
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Section - Video */}
      <section className="py-8 md:py-12 text-center bg-zinc-100">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
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
              allowfullscreen
              className="w-full aspect-video"
            ></iframe>
          </div>
        </article>
      </section>
    </>
  );
};
