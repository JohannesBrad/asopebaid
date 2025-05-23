import { useAsopebaidData } from "../hooks/useAsopebaidData";
import { DirectivaTitulo } from "../components/DirectivaTitulo";
import { PageTitle } from "../components/PageTitle";

export const Directiva = () => {
  const { data } = useAsopebaidData();
  // const directiva = data.filter((item) => item.tipo === "directiva");
  const directiva3 = data.filter(
    (item) => item.tipo === "directiva" && item.periodo === 3
  );
  const directiva2 = data.filter(
    (item) => item.tipo === "directiva" && item.periodo === 2
  );
  const directiva1 = data.filter(
    (item) => item.tipo === "directiva" && item.periodo === 1
  );
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-[#f9fafb] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Directiva de ASOPEBAID
        </h2>

        <div className="max-w-screen-xl mx-auto px-8 pb-20">
          <div className="py-4">
            <DirectivaTitulo title={"JUNTA DIRECTIVA (2024 – 2026)"} />
            <div className="flex flex-col items-center justify-center gap-8 md:gap-8 md:flex-row flex-wrap">
              {directiva3.map((item, id) => {
                return (
                  <article
                    key={id}
                    className="w-72 h-auto m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-md bg-white"
                  >
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          loading="lazy"
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

          <div className="py-4">
            <DirectivaTitulo title={"JUNTA DIRECTIVA (2021 – 2023)"} />
            <div className="flex flex-col items-center justify-center gap-8 md:gap-8 md:flex-row flex-wrap">
              {directiva2.map((item, id) => {
                return (
                  <article
                    key={id}
                    className="w-72 h-auto m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-md bg-white"
                  >
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          loading="lazy"
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

          <div className="py-4">
            <DirectivaTitulo title={"PRIMER CONSEJO DIRECTIVO (2018 – 2021)"} />
            <div className="flex flex-col items-center justify-center gap-8 md:gap-8 md:flex-row flex-wrap">
              {directiva1.map((item, id) => {
                return (
                  <article
                    key={id}
                    className="w-72 h-auto m-4 flex flex-col justify-between text-center py-10 rounded-xl px-4 shadow-md bg-white"
                  >
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          loading="lazy"
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
        </div>
      </section>
    </>
  );
};
