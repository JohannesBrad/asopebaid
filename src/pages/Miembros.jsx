import React from "react";
import { Slider } from "../components/Slider";

export const Miembros = () => {
  return (
    <>
      <section className="py-8 md:pt-[12rem] text-center">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
          Miembros
        </h2>

        <div className="w-full bg-colormarcobre-100">
          <div className="max-w-screen-xl mx-auto">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};
