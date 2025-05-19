import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useAsopebaidData } from "../hooks/useAsopebaidData";
import Skeleton from "react-loading-skeleton";

export const Slider = () => {
  const { data, loading } = useAsopebaidData();
  const [selectedMember, setSelectedMember] = useState(null);
  console.log(data);

  const handleOpenModal = (miembro) => {
    setSelectedMember(miembro);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const miembros = data.filter((item) => item.tipo === "miembro");

  return (
    <>
      <div className="relative">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="w-ful"
        >
          {miembros.map((item, id) => (
            <div className="relative px-4">
              <SwiperSlide key={id} className="pb-10">
                <div className="flex justify-center">
                  <article className="w-[22rem] max-w-sm h-[32rem] flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-sm bg-white">
                    <div>
                      <div className="flex justify-center mb-4">
                        {loading ? (
                          <Skeleton height={100} width={100} />
                        ) : (
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            loading="lazy"
                            className="w-40 h-40 rounded-full object-cover border-4 border-white"
                          />
                        )}
                        {/*   <img
                          src={item.imagen}
                          alt={item.nombre}
                          loading="lazy"
                          className="w-40 h-40 rounded-full object-cover border-4 border-white"
                        /> */}
                      </div>
                      <div className="text-zinc-700">
                        <h2 className="text-lg font-semibold pt-4">
                          {item.nombre}
                        </h2>
                        <p className="text-sm py-2 font-medium text-zinc-500">
                          {item.socio}
                        </p>
                        <p className="text-md py-2 font-light">
                          {item.descripcion.length > 0
                            ? item.descripcion
                                .split(" ")
                                .slice(0, 18)
                                .join(" ") + "..."
                            : "Descripción no disponible"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-zinc-700 bg-zinc-200 mt-4 w-full px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      Leer más
                    </button>
                  </article>
                </div>
              </SwiperSlide>
            </div>
          ))}

          <button className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-800 hover:bg-blue-100 transition">
            &#8592;
          </button>

          <button className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-800 hover:bg-blue-100 transition">
            &#8594;
          </button>
        </Swiper>
      </div>
      {/* MODAL */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-zinc-700 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={selectedMember.imagen}
                alt={selectedMember.nombre}
                className="w-36 h-36 mx-auto rounded-full object-cover border-1 border-zinc-200 mb-4 "
              />
              <h2 className="text-xl font-bold">{selectedMember.nombre}</h2>
              <p className="text-sm text-zinc-500 mb-4">
                {selectedMember.socio}
              </p>
              <p className="text-sm text-left leading-7 text-zinc-700 whitespace-pre-line">
                {selectedMember.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
