import React from "react";

{
  /* <a href="https://www.aaalac.org/" target="_blank"><i class="icon-link2"></i> AAALAC International </a></p><br>
<a href="https://www.aalaslearninglibrary.org/" target="_blank"><i class="icon-link2"></i> AALAS Learning Library</a></p><br>
<a href="https://www.bioterios.com/index.php" target="_blank"><i class="icon-link2"></i> Bioterios.com</a></p><br>
<a href="https://www.ccac.ca/en/about-the-ccac/" target="_blank"><i class="icon-link2"></i> Canadian Council on Animal Care</a></p><br>
<a href="https://www.fessacal.org/" target="_blank"><i class="icon-link2"></i> Federación de Sociedades Sudamericanas de Ciencias de Animales de Laboratorio (FESSACAL)</a></p><br>
<a href="https://animalcareuseret.org/" target="_blank"><i class="icon-link2"></i> Animal Care and Use in Research, Education and Testing (ACURET)</a></p><br>

<a href="https://www.aacytal.org/" target="_blank"><i class="icon-link2"></i> Asociación Argentina de Ciencia y Tecnología de Animales de Laboratorio (AACyTAL)</a></p><br></br>
 */
}
const enlaces = [
  {
    id: 1,
    title: "AAALAC Internationalbaid",
    path: "https://www.aaalac.org/",
  },
  {
    id: 2,
    title: "AALAS Learning Library",
    path: "https://www.aalaslearninglibrary.org/",
  },
  {
    id: 3,
    title: "Bioterios.com",
    path: "https://www.bioterios.com/index.php",
  },
  {
    id: 4,
    title: "Canadian Council on Animal Care",
    path: "https://www.ccac.ca/en/about-the-ccac/",
  },
  {
    id: 5,
    title:
      "Federación de Sociedades Sudamericanas de Ciencias de Animales de Laboratorio (FESSACAL)",
    path: "https://www.fessacal.org/",
  },
  {
    id: 6,
    title: "Animal Care and Use in Research, Education and Testing (ACURET)",
    path: "https://animalcareuseret.org/",
  },
  {
    id: 7,
    title:
      "Asociación Argentina de Ciencia y Tecnología de Animales de Laboratorio (AACyTAL)",
    path: "https://www.aacytal.org/",
  },
];

export const Enlaces = () => {
  return (
    <>
      <section className="py-8 md:pt-[12rem] text-center">
        <h2 className="text-2xl font-medium py-6 md:text-3xl md:font-medium leading-5">
          Enlaces
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col justify-center gap-8 md:gap-8 md:flex-row">
            <article className="px-8 pb-10 md:py-4 rounded-xl bg-zinc-50">
              <div className="w-full">
                {enlaces.map((item) => {
                  return (
                    <>
                      <div
                        key={item.id}
                        className="flex w-full flex-col md:flex-row md:justify-between md:items-center border-b border-zinc-400 py-1 md:px-4"
                      >
                        <h3 className="text-lg md:text-md py-2 inline-flex items-center gap-2 text-zinc-500 ">
                          <span>{/* <Arrow customColor="#CE3829" /> */}</span>{" "}
                          {item.title}
                        </h3>
                        <div className="space-x-4 ">
                          <a
                            href={item.path}
                            target="_blank"
                            className="inline-flex items-center gap-2 font-semibold text-sm group hover:text-white transition-colors duration-300 ease-in-out "
                          >
                            <span className="text-blue-700 font-medium">
                              {/* {item.link} */}Ver
                            </span>
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
