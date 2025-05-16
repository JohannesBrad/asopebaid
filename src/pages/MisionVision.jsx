import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MisionVision = () => {
  return (
    <section className="py-8 md:pt-[12rem] bg-[#f9fafb] ">
      <div className="min-h-screen   px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1d4999]">
            Misión y Visión
          </h2>

          {/* Misión */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-start gap-4">
            <div className="text-[#1d4999] text-4xl">
              <FaBullseye />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Misión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprometidos en promover el bienestar y uso adecuado de
                animales en la investigación científica y la docencia.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="text-[#1d4999] text-4xl">
              <FaEye />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Construir y fortalecer una sociedad de respeto al bienestar de
                los animales empleados en la investigación científica y la
                docencia, promoviendo los principios de reemplazo, reducción y
                refinamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
