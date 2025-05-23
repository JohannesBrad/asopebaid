import React from "react";
import { PageTitle } from "../components/PageTitle";
import { useAsopebaidData } from "../hooks/useAsopebaidData";

export const Covid19 = () => {
  const { data } = useAsopebaidData();
  const pronunciamientos = data.filter((item) => item.tipo === "documentos");
  console.log("pronunciamientos", pronunciamientos);

  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Covid-19"} />
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col justify-center gap-8 md:gap-8 md:flex-row">
            <article className="w-full max-w-3xl mx-auto px-4 pb-10 md:py-4 rounded-xl bg-zinc-50 shadow-sm">
              <div className="w-full">
                {pronunciamientos.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-full justify-between items-center border-b border-zinc-300 py-3"
                  >
                    <h3 className="text-left text-lg md:text-md py-2 inline-flex items-center gap-2 text-zinc-500 ">
                      {item.titulo}
                    </h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-sm text-[#1d4999] hover:text-blue-500 transition"
                    >
                      Ver
                    </a>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
