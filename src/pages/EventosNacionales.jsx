import React from "react";
import evento1 from "../assets/event-nac-2023-001.jpg";
import evento2 from "../assets/event-nac-2023-002.png";

const eventosNacionales = [
  {
    id: 1,
    imagen: evento1,
    nombre: "Seminario Virtual Internacional",
    fecha: "29 Agosto de 2023",
    lugar: "Instituto Nacional de Salud (INS) A&C Group",
    descripcion:
      "Sistemas de Cuidados de Animales de Laboratorio y su Acreditación AAALAC",
  },

  {
    id: 2,
    imagen: evento2,
    nombre: "Ciclo de Conferencias sobre Animales de Investigación",
    fecha: "26 OCtiubre, 09 y 10 de Noviembre 2023",
    lugar: "ASOPEBAID",
    descripcion: "",
  },
];

export const EventosNacionales = () => {
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Eventos Nacionales
        </h2>

        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 md:flex-row">
            {eventosNacionales.map((evento) => (
              <article
                key={evento.id}
                className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={evento.imagen}
                    alt={evento.nombre}
                    className=" aspect-square rounded-t-xl  h-[20rem]  w-full"
                  />
                </div>
                <div className="text-zinc-700 px-5 py-4">
                  <h2 className="text-xl font-semibold">{evento.nombre}</h2>
                  <p className="text-lg py-2 font-light">
                    {evento.descripcion}
                  </p>
                  <div>
                    <p className="text-lg py-2 font-medium text-[#1d4999]">
                      {evento.fecha}
                    </p>
                    <p className="text-md py-2 font-light">{evento.lugar}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
