import { useAsopebaidData } from "../hooks/useAsopebaidData";

export const Directiva = () => {
  const { data } = useAsopebaidData();
  const directiva = data.filter((item) => item.tipo === "directiva");
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-[#f9fafb] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d4999] mb-6">
          Directiva de ASOPEBAID
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-8 md:flex-row flex-wrap">
            {directiva.map((item, id) => {
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
      </section>
    </>
  );
};
