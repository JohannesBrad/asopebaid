import React from "react";
import { FaListUl } from "react-icons/fa";
import { PageTitle } from "../components/PageTitle";

export const Objetivos = () => {
  return (
    <section className="py-8 md:pt-[12rem] bg-[#f9fafb] ">
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <PageTitle pageTitle={"Objetivos"} />
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="text-[#1d4999] text-4xl">
              <FaListUl />
            </div>
            <div>
              <ul className="list-disc pl-4 text-gray-700 space-y-4 leading-relaxed">
                <li>
                  Promover el uso adecuado y el bienestar de los animales de
                  laboratorio, utilizados para fines de investigación científica
                  y docencia, promoviendo la relación y la cooperación entre los
                  profesionales que trabajan con animales de laboratorio.
                </li>
                <li>
                  Fomentar la ética e integridad científica en la utilización de
                  animales con fines de investigación y docencia.
                </li>
                <li>
                  Promover la investigación en todos aquellos aspectos
                  relacionados con la ciencia y el bienestar de los animales
                  utilizados para fines científicos.
                </li>
                <li>
                  Fomentar proyectos de investigación para refinar, reducir o
                  reemplazar el empleo de animales en investigación y docencia.
                </li>
                <li>
                  Presentar a los órganos y entidades oficiales o privadas e
                  incluso a la opinión pública, el pensamiento e intereses de
                  los profesionales que trabajan en el ámbito de la salud y el
                  bienestar de los animales utilizados para fines científicos,
                  docencia e investigación.
                </li>
                <li>
                  Establecer relaciones con entidades nacionales y extranjeras
                  dedicadas a fines análogos.
                </li>
                <li>
                  Difundir por medio de coloquios, seminarios, congresos, grupos
                  de trabajo, etc., todas las informaciones científicas y
                  técnicas relativas al empleo de animales, refinación,
                  reducción y reemplazo.
                </li>
                <li>
                  Fomentar la formación de Comités Institucionales de Cuidado y
                  Uso de Animales en Investigación (CICUALES) a nivel de
                  instituciones públicas y privadas.
                </li>
                <li>
                  Desarrollar y promover programas y actividades de formación
                  afines.
                </li>
                <li>
                  Brindar asesoramiento y orientación a organismos públicos y
                  privados en el campo de la investigación con animales, cuando
                  sea pertinente.
                </li>
                <li>
                  Promover las condiciones de infraestructura mínimas requeridas
                  para el trabajo con animales de laboratorio.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
