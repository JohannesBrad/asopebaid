import React from "react";
import articulo1 from "../assets/Articulo1.png";
import articulo2 from "../assets/Articulo2.png";
const articulos = [
  {
    id: 1,
    imagen: articulo1,
    nombre: "Universitas - Miguel Hernández",
    cargo: "Oficina de Investigación Responsable",
    descripcion:
      "Un excelente video que aborda una introducción a la integridad científica, el bienestar animal, la descripción de las instalaciones básicas de los bioterios. Resaltando que la experiencia en bioseguridad en bioterios apoyada en conceptos de UNA SOLA SALUD (One Health) se extrapoló a algunas residencias de ancianos durante la pandemia de COVID-19.",
    videoPath: "https://www.youtube.com/watch?v=rh1tK-rhjBA",
  },
  {
    id: 2,
    imagen: articulo2,
    nombre: "Global Veterinary Community (WSAVA)",
    cargo: "Asociación Mundial de Veterinarios de Pequeños Animales",
    descripcion:
      "Video muy explicativo sobre la situación del SARS-CoV-2, la zoonosis inversa, el concepto de bienestar animal aunado al vínculo humano-animal, finalmente el reconocimiento a la medicina veterinaria como una actividad esencial ininterrumpida y sus recomendaciones de bioseguridad para continuar con su ejercicio en estos tiempos de pandemia.",
    videoPath:
      "https://www.youtube.com/watch?time_continue=4394&amp;v=lMCYLATHhzs&amp;feature=emb_title",
  },
];

export const Articulos = () => {
  return (
    <>
      <section className="py-8 md:pt-[12rem] text-center">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
          ARTICULOS
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col justify-center gap-8 md:gap-8 md:flex-row">
            {articulos.map((item, id) => {
              return (
                <article
                  key={id}
                  className="w-72 h-auto m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-sm bg-white"
                >
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.imagen}
                        className="w-40 h-40 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div className="text-zinc-700">
                      <h2 className="text-lg font-semibold pt-4">
                        {item.nombre}
                      </h2>
                      <p className="text-sm py-2 font-medium text-zinc-500">
                        {item.cargo}
                      </p>

                      <p className="text-md py-2 font-light">
                        {item.descripcion.length > 0
                          ? item.descripcion.split(" ").slice(0, 18).join(" ") +
                            "..."
                          : "Descripción no disponible"}
                      </p>
                      <a
                        href={item.videoPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Ver video
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
