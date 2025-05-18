import React from "react";
import noticia1 from "../assets/noticia24-06-20-1.png";
import noticia2 from "../assets/noticia24-06-20-2.png";
const noticias = [
  {
    id: 1,
    imagen: noticia1,
    nombre: "Organización Mundial de Sanidad Animal (OiE)",
    fecha: "Jun 24",
    lugar: "Preguntas y respuestas sobre COVID-19",
    descripcion: "",
  },
  {
    id: 1,
    imagen: noticia2,
    nombre:
      "Entrevista que destaca la importancia de la comunicación y el networking, que permitió a los científicos de Jackson Laboratory (JAX) prepararse para afrontar la necesidad de tener con prontitud un modelo de ratón que ayude a la investigación a encontrar soluciones oportunas.",
    fecha: "Jun 24",
    lugar: "Preguntas y respuestas sobre COVID-19",
    descripcion: "",
  },
];
export const Noticias = () => {
  return (
    <>
      <>
        <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
            Noticias
          </h2>

          <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
            {/* <div className="flex flex-col justify-center gap-8 md:gap-12 md:flex-row"> */}
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {noticias.map((item) => (
                <article
                  key={item.id}
                  className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className=" aspect-square rounded-t-xl  h-[20rem]  w-full"
                    />
                  </div>
                  <div className="text-zinc-700 px-5 py-4">
                    <h2 className="text-xl font-semibold">{item.nombre}</h2>
                    <p className="text-lg py-2 font-light">
                      {item.descripcion}
                    </p>
                    <div>
                      <p className="text-lg py-2 font-medium text-[#1d4999]">
                        {item.fecha}
                      </p>
                      <p className="text-md py-2 font-light">{item.lugar}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
};
