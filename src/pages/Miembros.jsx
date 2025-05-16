import React from "react";
import { Slider } from "../components/Slider";

export const Miembros = () => {
  return (
    <>
      <section className="py-8 md:pt-[12rem] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
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
