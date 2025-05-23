import React from "react";
import { PageTitle } from "../components/PageTitle";
import { useAsopebaidData } from "../hooks/useAsopebaidData";

export const EventosInternacionales = () => {
  const { data } = useAsopebaidData();

  const eventosInternacionales = data.filter(
    (item) => item.tipo === "evento-internacional"
  );
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Eventos Internacionales"} />
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {eventosInternacionales.map((evento) => (
              <article
                key={evento.id}
                className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={evento.imagen}
                    alt={evento.nombre}
                    loading="lazy"
                    className=" aspect-square rounded-t-xl  h-[20rem]  w-full"
                  />
                </div>
                <div className="text-zinc-700 px-5 py-4">
                  <h2 className="text-xl font-semibold">{evento.titulo}</h2>
                  <p className="text-lg py-2 font-light">
                    {evento.descripcion}
                  </p>
                  <div>
                    <p className="text-lg py-2 font-medium text-[#1d4999]">
                      {evento.fecha}
                    </p>
                    <p className="text-md py-2 font-light">{evento.lugar}</p>
                    <a
                      href={evento.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-md py-2 font-medium text-[#1d4999] border border-[#1d4999] rounded-sm p-3 hover:bg-[#1d4999] hover:text-white trastion-all mt-4 inline-block"
                    >
                      Ver más
                    </a>
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
