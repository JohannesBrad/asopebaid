import React from "react";
import { useAsopebaidData } from "../hooks/useAsopebaidData";

export const EventosAsopebaid = () => {
  const { data } = useAsopebaidData();
  const eventosAsopebaid = data.filter(
    (item) => item.tipo === "evento-asopebaid"
  );

  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Eventos ASOPEBAID
        </h2>

        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          {/* <div className="flex flex-col justify-center gap-8 md:gap-12 md:flex-row"> */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {eventosAsopebaid.map((evento) => (
              <article
                key={evento.id}
                className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={evento.imagen}
                    alt={evento.nombre}
                    loading="lazy"
                    className="bg-cover aspect-square rounded-t-xl  h-[20rem]  w-full"
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
