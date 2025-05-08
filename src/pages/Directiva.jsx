import React from "react";
import directiva1 from "../assets/directiva-4.png";
import directiva2 from "../assets/directiva-5.png";
import directiva3 from "../assets/directiva-6.png";

const directiva = [
  {
    id: 1,
    imagen: directiva1,
    nombre: "Dante Vara Marquez",
    cargo: "Presidente",
    descripcion: "",
  },
  {
    id: 2,
    imagen: directiva2,
    nombre: "Evelyn Narrea Castilla",
    cargo: "Tesorera",
    descripcion: "",
  },
  {
    id: 3,
    imagen: directiva3,
    nombre: "Diana Cedamanos Pacherres",
    cargo: "Secretaria:",
    descripcion: "",
  },
];

export const Directiva = () => {
  return (
    <>
      <section className="py-8 md:pt-[12rem] text-center">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
          DIRECTIVA DE ASOPEBAID
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col justify-center gap-8 md:gap-8 md:flex-row">
            {directiva.map((item, id) => {
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
