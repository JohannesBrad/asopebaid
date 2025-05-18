import React from "react";
import eventoInter1 from "../assets/event-int-2024-008.png";
import eventoInter2 from "../assets/event-int-2024-009.jpeg";
import eventoInter3 from "../assets/event-int-2024-002.jpg";
import eventoInter4 from "../assets/event-int-2024-003.png";
import eventoInter5 from "../assets/event-int-2024-010.jpg";
import eventoInter6 from "../assets/event-int-2024-004.jpg";
import eventoInter7 from "../assets/event-int-2024-005.png";
import eventoInter8 from "../assets/event-int-2024-006.jpg";
import eventoInter9 from "../assets/event-int-2024-007.jpg";

const eventosInteracionales = [
  {
    id: 1,
    imagen: eventoInter1,
    nombre: "JAX Online Microlessons & Minicourses",
    fecha: "",
    lugar: "Internacional",
    descripcion: "",
  },

  {
    id: 2,
    imagen: eventoInter2,
    nombre: "Jornada AACyTAL",
    fecha: "25 Abril 2024",
    lugar: "Aregntina",
    descripcion: "El Metaanálisis como Herramienta en la Aplicación de las 3Rs",
  },
  {
    id: 3,
    imagen: eventoInter3,
    nombre: "Openness in Animal Research Conference 2024",
    fecha: "02 Y 03 de Mayo 2024",
    lugar: "West Midlands, UK",
    descripcion: "El Metaanálisis como Herramienta en la Aplicación de las 3Rs",
  },
  {
    id: 4,
    imagen: eventoInter4,
    nombre: "I Congreso Internacional sobre Animales en Investigación",
    fecha: "22 al 24 MAY 2024",
    lugar: "Chile",
    descripcion: "El Metaanálisis como Herramienta en la Aplicación de las 3Rs",
  },
  {
    id: 5,
    imagen: eventoInter5,
    nombre:
      "Curso de Formación para Usuarios de Animales en Investigación 2024",
    fecha: "04 JUN al 25 JUL 2024",
    lugar: "Colombia",
    descripcion: "",
  },
  {
    id: 6,
    imagen: eventoInter6,
    nombre: "UFAW International Animal Welfare Conference 2024",
    fecha: "10 y 11 JUL 2024",
    lugar: "Portugal",
    descripcion: "",
  },
  {
    id: 7,
    imagen: eventoInter7,
    nombre: "ExpoBioterios Hybrid 2024",
    fecha: "10 y 12 JUL 2024",
    lugar: "Costa Rica",
    descripcion: "",
  },
  {
    id: 8,
    imagen: eventoInter8,
    nombre: "V COLAMA:",
    fecha: "16 al 20 SEP 2024",
    lugar: "Colombia",
    descripcion:
      "Quinto Congreso Latinoamericano de Métodos Alternativos al Uso de Animales de Experimentación",
  },
  {
    id: 8,
    imagen: eventoInter9,
    nombre: "3rd European Zebrafish Husbandry Association Meeting Hungary 2024",
    fecha: "16 al 18 OCT 2024",
    lugar: "Hungría",
    descripcion: "",
  },
];

export const EventosInternacionales = () => {
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Eventos Internacionales
        </h2>

        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          {/* <div className="flex flex-col justify-center gap-8 md:gap-12 md:flex-row"> */}
          {/* <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"> */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {eventosInteracionales.map((evento) => (
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
