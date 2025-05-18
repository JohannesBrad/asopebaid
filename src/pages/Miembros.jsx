import React from "react";
import { Slider } from "../components/Slider";

export const Miembros = () => {
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-[#f9fafb] ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Miembros
        </h2>

        <div className="w-full">
          <div className="max-w-screen-xl mx-auto">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};
