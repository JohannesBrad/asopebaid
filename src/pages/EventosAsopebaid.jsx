import React from "react";
import { useAsopebaidData } from "../hooks/useAsopebaidData";
import { PageTitle } from "../components/PageTitle";

export const EventosAsopebaid = () => {
  const { data } = useAsopebaidData();
  const eventosAsopebaid = data.filter(
    (item) => item.tipo === "evento-asopebaid"
  );

  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Eventos ASOPEBAID"} />
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {eventosAsopebaid.map((evento) => (
              <article
                key={evento.id}
                className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] bg-white">
                  <img
                    src={evento.imagen}
                    alt={evento.nombre}
                    className="absolute inset-0 w-full h-full object-contain p-2"
                    loading="lazy"
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
