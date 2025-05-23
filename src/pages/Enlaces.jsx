import React from "react";
import { useAsopebaidData } from "../hooks/useAsopebaidData";
import { PageTitle } from "../components/PageTitle";
export const Enlaces = () => {
  const { data } = useAsopebaidData();
  const enlaces = data.filter((item) => item.tipo === "enlace");

  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center">
        <PageTitle pageTitle={"Enlaces"} />
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col justify-center gap-8 md:gap-8 md:flex-row">
            <article className="px-4 pb-10 md:py-4 rounded-xl bg-zinc-50">
              <div className="w-full">
                {enlaces.map((item) => {
                  return (
                    <>
                      <div
                        key={item.id}
                        className="flex w-full justify-between items-center md:justify-between md:items-center border-b border-zinc-400 py-1"
                      >
                        <h3 className="text-left text-lg md:text-md py-2 inline-flex items-center gap-2 text-zinc-500 ">
                          <span>{/* <Arrow customColor="#CE3829" /> */}</span>{" "}
                          {item.titulo}
                        </h3>
                        <div className="space-x-4 ">
                          <a
                            href={item.url}
                            target="_blank"
                            className="inline-flex items-center gap-2 font-semibold text-sm group text-[#1d4999] hover:text-blue-500 transition-colors duration-300 ease-in-out "
                          >
                            Ver
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
