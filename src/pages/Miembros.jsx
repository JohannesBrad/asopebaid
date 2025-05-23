import React from "react";
import { Slider } from "../components/Slider";
import { PageTitle } from "../components/PageTitle";
export const Miembros = () => {
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-[#f9fafb] ">
        <PageTitle pageTitle={"Miembros"} />
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};
