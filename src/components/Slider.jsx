import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import miembro1 from "../assets/directiva-1.png";
import miembro2 from "../assets/socio-2.png";
import miembro3 from "../assets/socio-3.png";
import miembro4 from "../assets/socio-6.png";
import miembro5 from "../assets/socio-4.png";
import miembro6 from "../assets/socio-5.png";
import miembro7 from "../assets/socio-7.png";

const miembrosAsopebaid = [
  {
    id: 1,
    imagen: miembro1,
    nombre: "CÉSAR MIGUEL GAVIDIA CHUCÁN",
    socio: "SOCIO N° 0003-19",
    descripcion:
      "Médico Veterinario egresado en 1992 de la FMV-UNMSM, Maestría en Salud Pública (2002) y Doctorado en Salud Internacional (2008) en la Escuela de Salud Pública de la Universidad Johns Hopkins (USA). Profesor Principal del Laboratorio de Epidemiología y Economía Veterinaria de la FMV-UNMSM, 25 años de docencia y de investigación en esta área. Director de la Unidad de Posgrado de la Facultad de Medicina Veterinaria UNMSM. Entrenamiento en enfermedades infecciosas, salud pública, ensayos pre-clínicos y clínicos, etc en países como Estados Unidos, Brasil, Colombia, Chile. Participación como ponente en congresos nacionales (Congreso Peruano de Parasitología, Congreso de Medicina Veterinaria, etc) e internacionales (Meeting of the American Society of Tropical Medicine and Hygiene, International Congress of Parasitology, World Congress of Echinococcosis, entre otros). Publicaciones científicas en revistas indexadas nacionales e internacionales. Revisor de revistas indexadas tales como Acta Tropica, Parasites & Vectors, EcoHealth, International Journal of Veterinary Science and Animal Husbandry, Parasitology, entre otros. Trabajos de investigación en Taenia solium / cisticercosis, Echinococcus granulosus / equinococosis quística, Chagas, Cryptosporidium, Bartonella. Desarrollo de modelos animales para nuevos tratamientos, pruebas diagnósticas, infecciones experimentales, epidemiología de campo, estudios de transmisión de enfermedades y factores de riesgo. El grupo de trabajo en la investigación está integrado por Médicos Veterinarios, Médicos cirujanos, Neurólogos, Epidemiólogos, Biólogos Moleculares, Parasitólogos, Enfermeras, Técnicos, Ecografistas, Economistas. Asesor en la elaboración y análisis del Plan Piloto para el Control de la Equinocososis Quística en Perú, preparado con profesionales del SENASA, del Ministerio de Salud. Ministerio de Educación bajo el auspicio de la OPS. Miembro del Grupo denominado La Iniciativa para el Control y Prevención de la Equinococosis en América del Sur, integrado por profesionales de distintas áreas de Chile, Uruguay, Argentina, Brasil y Perú.",
  },
  {
    id: 2,
    imagen: miembro2,
    nombre: "FRANCO CEINO GORDILLO",
    socio: "SOCIO N° 0023-21",
    descripcion:
      "Médico Veterinario egresado de la Universidad Alas Peruanas, con experiencia en docencia como Jefe de Practica desde enero 2000 al 31 de diciembre del 2001. Inició como docente jefe de curso desde agosto del año 2002 hasta la actualidad. Inclinación hacia el área de Animales Menores, Diagnóstico y Laboratorio Clínico, Patología Clínica Veterinaria y Microbiología Veterinaria. Cursó el programa de Maestría en Salud Animal en la Facultad de Medicina Veterinaria de la Universidad Nacional Mayor de San Marcos. Obtuvo el Grado Master en Veterinaria en octubre del 2017 en el Programa de Maestría en Medicina Veterinaria en el Campus Universitario Europeo. Obtuvo el título de Auditor de Laboratorios para Acreditación y Certificación en agosto del 2018. Obtuvo la especialidad en Gestión de una Unidad de un Laboratorio de Análisis Clínicos obteniendo el título de especialista en el 2019. Obtuvo el título de Especialista en Análisis de Muestras en el Laboratorio de Microbiología en noviembre del 2019. Alcanzó el título de Especialista en Laboratorio Clínico Veterinario en enero 2021. Concluyó estudios en el Programa de Post Grado en la Maestría en Docencia Superior de la Universidad Ricardo Palma. Obtuvo el título de especialista en enfermedades infecciosas y patología en Medicina Veterinaria. Es autor de diversas publicaciones científicas en revistas indexadas nacionales. Miembro de la ASOPEBAID-Perú (Asociación para el empleo y Bienestar Animal en Investigación y Docencia). Miembro de la Asociación Argentina de Ciencia y Tecnología de Animales de Laboratorio (AACyTAL).",
  },

  {
    id: 3,
    imagen: miembro3,
    nombre: "HERNÁN MÁLAGA CRUZ",
    socio: "SOCIO N° 0012-19",
    descripcion:
      "Médico Veterinario UNMSM 1965. Master en Medicina Preventiva Veterinaria Universidad de California, Davis, 1968. Doctor en Salud Pública Universidad Cayetano Heredia, 2010. Doctor Honoris causa, Universidad Ricardo Palma, 2018. Ex Representante de la OPS/OMS en Venezuela, Colombia y Paraguay 1990-2004. Ex Jefe de Proyección Social y Extensión Cultural, Facultad de Ciencias Biológicas, Universidad Ricardo Palma.",
  },

  {
    id: 4,
    imagen: miembro4,
    nombre: "ROXANA LESCANO GUEVARA",
    socio: "SOCIO N° 0021-19",
    descripcion:
      "Abogada con amplia experiencia en investigación, docencia y aspectos regulatorios de la investigación con animales. Especializada en bioética e integridad científica, con más de 15 años de experiencia en Comités de Ética y Docencia.",
  },
  {
    id: 5,
    imagen: miembro5,
    nombre: "FLOR DE MARÍA DOLORES FUENTES PAREDES",
    socio: "SOCIO N° 0008-19",
    descripcion:
      "Egresado de la Maestría de Microbiología UNMSM; Diplomado: Farmacovigilancia y Tecnovigilancia-Universidad Norbert Wiener. Control de calidad de Productos Biológicos -Producción de vacunas virales, bacterianas, antígeno de tuberculina e hidatidosis, aseguramiento de la calidad y farmacovigilancia en el Centro Nacional de Productos Biológicos del INS. Ayudante de Práctica, en el curso de Química Orgánica D III, Facultad de Farmacia y Bioquímica de la U.N.M.S.M. (1991); Curso de uso y manejo de animales de laboratorio. Facultad de Farmacia y Bioquímica de la U.N.M.S.M. (2013). Autora de diversas producciones científicas a nivel nacional. Afiliada a la Asociación Peruana de Microbiología y miembro fundador de la Asociación para el Empleo y Bienestar de Animales en Investigación y Docencia (ASOPEBAID).",
  },

  {
    id: 6,
    imagen: miembro6,
    nombre: "JAVIER REYNA REÁTEGUI",
    socio: "SOCIO N° 0021-19",
    descripcion:
      "Médico Veterinario egresado de la Universidad Nacional Mayor de San Marcos. Maestría y Doctorado en Salud Publica en la Universidad Nacional Federico Villarreal. Médico Veterinario del Bioterio de animales pequeños: ratones y ratas (1980 - 2019). Director Ejecutivo de Ciencia y Tecnología de Alimentos del Instituto Nacional de Salud - CENAN/INS (2004 - 2006). Director Ejecutivo de Productos e Investigación Veterinaria del Instituto Nacional de Salud - CNPB/INS (2010 a 2018).",
  },
  {
    id: 7,
    imagen: miembro7,
    nombre: "LUIS ANTONIO GOMEZ PUERTA",
    socio: "SOCIO N° 0016-19",
    descripcion:
      "Médico Veterinario egresado de la Universidad Nacional Mayor de San Marcos con Maestría en Salud Animal y candidato al grado de Doctor en Ciencias Veterinarias en la misma universidad. Profesor e investigador de la Facultad de Medicina Veterinaria de la Universidad Nacional Mayor de San Marcos.Clasificado como Investigador Distinguido por RENACYT. Reconocido parasitólogo con mucha experiencia en modelos animales para parásitos de importancia zoonótica como Taenia solium (cisticercosis), fascioliasis, equinococosis, enfermedades transmitidas por vectores. Con más de 80 artículos científicos en revistas indexadas internacionales y nacionales.",
  },
];

export const Slider = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (miembro) => {
    setSelectedMember(miembro);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

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
              slidesPerView: 4,
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
          className="w-full py-6"
        >
          {miembrosAsopebaid.map((item, id) => (
            <SwiperSlide key={id}>
              <article className="w-72 h-[35rem] m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-sm bg-white">
                <div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-40 h-40 rounded-full object-cover border-4 border-white"
                    />
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
                        ? item.descripcion.split(" ").slice(0, 18).join(" ") +
                          "..."
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
            </SwiperSlide>
          ))}

          <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
            ←
          </button>
          <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
            →
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
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 mb-4"
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

/* import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import miembro1 from "../assets/directiva-1.png";
import miembro2 from "../assets/socio-2.png";
import miembro3 from "../assets/socio-3.png";
import miembro4 from "../assets/socio-6.png";
import miembro5 from "../assets/socio-4.png";
import miembro6 from "../assets/socio-5.png";
import miembro7 from "../assets/socio-7.png";

const miembrosAsopebaid = [
  {
    id: 1,
    imagen: miembro1,
    nombre: "CÉSAR MIGUEL GAVIDIA CHUCÁN",
    socio: "SOCIO N° 0003-19",
    descripcion:
      "Médico Veterinario egresado en 1992 de la FMV-UNMSM, Maestría en Salud Pública (2002) y Doctorado en Salud Internacional (2008) en la Escuela de Salud Pública de la Universidad Johns Hopkins (USA). Profesor Principal del Laboratorio de Epidemiología y Economía Veterinaria de la FMV-UNMSM, 25 años de docencia y de investigación en esta área. Director de la Unidad de Posgrado de la Facultad de Medicina Veterinaria UNMSM. Entrenamiento en enfermedades infecciosas, salud pública, ensayos pre-clínicos y clínicos, etc en países como Estados Unidos, Brasil, Colombia, Chile. Participación como ponente en congresos nacionales (Congreso Peruano de Parasitología, Congreso de Medicina Veterinaria, etc) e internacionales (Meeting of the American Society of Tropical Medicine and Hygiene, International Congress of Parasitology, World Congress of Echinococcosis, entre otros). Publicaciones científicas en revistas indexadas nacionales e internacionales. Revisor de revistas indexadas tales como Acta Tropica, Parasites & Vectors, EcoHealth, International Journal of Veterinary Science and Animal Husbandry, Parasitology, entre otros. Trabajos de investigación en Taenia solium / cisticercosis, Echinococcus granulosus / equinococosis quística, Chagas, Cryptosporidium, Bartonella. Desarrollo de modelos animales para nuevos tratamientos, pruebas diagnósticas, infecciones experimentales, epidemiología de campo, estudios de transmisión de enfermedades y factores de riesgo. El grupo de trabajo en la investigación está integrado por Médicos Veterinarios, Médicos cirujanos, Neurólogos, Epidemiólogos, Biólogos Moleculares, Parasitólogos, Enfermeras, Técnicos, Ecografistas, Economistas. Asesor en la elaboración y análisis del Plan Piloto para el Control de la Equinocososis Quística en Perú, preparado con profesionales del SENASA, del Ministerio de Salud. Ministerio de Educación bajo el auspicio de la OPS. Miembro del Grupo denominado La Iniciativa para el Control y Prevención de la Equinococosis en América del Sur, integrado por profesionales de distintas áreas de Chile, Uruguay, Argentina, Brasil y Perú.",
  },
  {
    id: 2,
    imagen: miembro2,
    nombre: "FRANCO CEINO GORDILLO",
    socio: "SOCIO N° 0023-21",
    descripcion:
      "Médico Veterinario egresado de la Universidad Alas Peruanas, con experiencia en docencia como Jefe de Practica desde enero 2000 al 31 de diciembre del 2001. Inició como docente jefe de curso desde agosto del año 2002 hasta la actualidad. Inclinación hacia el área de Animales Menores, Diagnóstico y Laboratorio Clínico, Patología Clínica Veterinaria y Microbiología Veterinaria. Cursó el programa de Maestría en Salud Animal en la Facultad de Medicina Veterinaria de la Universidad Nacional Mayor de San Marcos. Obtuvo el Grado Master en Veterinaria en octubre del 2017 en el Programa de Maestría en Medicina Veterinaria en el Campus Universitario Europeo. Obtuvo el título de Auditor de Laboratorios para Acreditación y Certificación en agosto del 2018. Obtuvo la especialidad en Gestión de una Unidad de un Laboratorio de Análisis Clínicos obteniendo el título de especialista en el 2019. Obtuvo el título de Especialista en Análisis de Muestras en el Laboratorio de Microbiología en noviembre del 2019. Alcanzó el título de Especialista en Laboratorio Clínico Veterinario en enero 2021. Concluyó estudios en el Programa de Post Grado en la Maestría en Docencia Superior de la Universidad Ricardo Palma. Obtuvo el título de especialista en enfermedades infecciosas y patología en Medicina Veterinaria. Es autor de diversas publicaciones científicas en revistas indexadas nacionales. Miembro de la ASOPEBAID-Perú (Asociación para el empleo y Bienestar Animal en Investigación y Docencia). Miembro de la Asociación Argentina de Ciencia y Tecnología de Animales de Laboratorio (AACyTAL).",
  },

  {
    id: 3,
    imagen: miembro3,
    nombre: "HERNÁN MÁLAGA CRUZ",
    socio: "SOCIO N° 0012-19",
    descripcion:
      "Médico Veterinario UNMSM 1965. Master en Medicina Preventiva Veterinaria Universidad de California, Davis, 1968. Doctor en Salud Pública Universidad Cayetano Heredia, 2010. Doctor Honoris causa, Universidad Ricardo Palma, 2018. Ex Representante de la OPS/OMS en Venezuela, Colombia y Paraguay 1990-2004. Ex Jefe de Proyección Social y Extensión Cultural, Facultad de Ciencias Biológicas, Universidad Ricardo Palma.",
  },

  {
    id: 4,
    imagen: miembro4,
    nombre: "ROXANA LESCANO GUEVARA",
    socio: "SOCIO N° 0021-19",
    descripcion:
      "Abogada con amplia experiencia en investigación, docencia y aspectos regulatorios de la investigación con animales. Especializada en bioética e integridad científica, con más de 15 años de experiencia en Comités de Ética y Docencia.",
  },
  {
    id: 5,
    imagen: miembro5,
    nombre: "FLOR DE MARÍA DOLORES FUENTES PAREDES",
    socio: "SOCIO N° 0008-19",
    descripcion:
      "Egresado de la Maestría de Microbiología UNMSM; Diplomado: Farmacovigilancia y Tecnovigilancia-Universidad Norbert Wiener. Control de calidad de Productos Biológicos -Producción de vacunas virales, bacterianas, antígeno de tuberculina e hidatidosis, aseguramiento de la calidad y farmacovigilancia en el Centro Nacional de Productos Biológicos del INS. Ayudante de Práctica, en el curso de Química Orgánica D III, Facultad de Farmacia y Bioquímica de la U.N.M.S.M. (1991); Curso de uso y manejo de animales de laboratorio. Facultad de Farmacia y Bioquímica de la U.N.M.S.M. (2013). Autora de diversas producciones científicas a nivel nacional. Afiliada a la Asociación Peruana de Microbiología y miembro fundador de la Asociación para el Empleo y Bienestar de Animales en Investigación y Docencia (ASOPEBAID).",
  },

  {
    id: 6,
    imagen: miembro6,
    nombre: "JAVIER REYNA REÁTEGUI",
    socio: "SOCIO N° 0021-19",
    descripcion:
      "Médico Veterinario egresado de la Universidad Nacional Mayor de San Marcos. Maestría y Doctorado en Salud Publica en la Universidad Nacional Federico Villarreal. Médico Veterinario del Bioterio de animales pequeños: ratones y ratas (1980 - 2019). Director Ejecutivo de Ciencia y Tecnología de Alimentos del Instituto Nacional de Salud - CENAN/INS (2004 - 2006). Director Ejecutivo de Productos e Investigación Veterinaria del Instituto Nacional de Salud - CNPB/INS (2010 a 2018).",
  },
  {
    id: 7,
    imagen: miembro7,
    nombre: "LUIS ANTONIO GOMEZ PUERTA",
    socio: "SOCIO N° 0016-19",
    descripcion:
      "Médico Veterinario egresado de la Universidad Nacional Mayor de San Marcos con Maestría en Salud Animal y candidato al grado de Doctor en Ciencias Veterinarias en la misma universidad. Profesor e investigador de la Facultad de Medicina Veterinaria de la Universidad Nacional Mayor de San Marcos.Clasificado como Investigador Distinguido por RENACYT. Reconocido parasitólogo con mucha experiencia en modelos animales para parásitos de importancia zoonótica como Taenia solium (cisticercosis), fascioliasis, equinococosis, enfermedades transmitidas por vectores. Con más de 80 artículos científicos en revistas indexadas internacionales y nacionales.",
  },
];

export const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 4,
        },
        700: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5, // Más separación en pantallas grandes
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      //navigation={true}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[FreeMode, Pagination, Navigation]}
      //   className="max-w-[80%] lg:max-w-[60%]"
      className="w-full py-6"
    >
      {miembrosAsopebaid.map((item, id) => {
        return (
          <SwiperSlide key={id}>
            <article className="w-72 h-[35rem] m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-sm">
              <div>
                <div className="flex justify-center mb-4">
                  <img
                    src={item.imagen}
                    alt="Presidente"
                    className="w-40 h-40 rounded-full object-cover aspect-square border-4 border-white"
                  />
                </div>
                <div className="text-zinc-700">
                  <h2 className="text-lg font-semibold pt-4">{item.nombre}</h2>
                  <p className="text-sm py-2 font-medium text-zinc-500">
                    {item.socio}
                  </p>
                  <p className="text-md py-2 font-light">
                    {item.descripcion.length > 0
                      ? item.descripcion.split(" ").slice(0, 18).join(" ") +
                        " ..."
                      : "Descripción no disponible"}
                  </p>
                </div>
              </div>
              <div className="">
                <button className="text-zinc-700 bg-zinc-200 block w-full px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                  Leer más
                </button>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
 */
