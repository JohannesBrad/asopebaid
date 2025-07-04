import { useAsopebaidData } from "../hooks/useAsopebaidData";
import { PageTitle } from "../components/PageTitle";
export const EventosNacionales = () => {
  const { data } = useAsopebaidData();
  const eventos = data.filter((item) => item.tipo === "evento-nacional");
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Eventos Nacionales"} />
        <div className="max-w-screen-xl mx-auto px-8 pb-20 pt-6 ">
          {/* <div className="flex flex-col items-center justify-center gap-8 md:gap-12 md:flex-row"> */}
          {/* <div className="flex flex-col items-center justify-center gap-8 md:gap-12 md:flex-row"> */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {eventos.map((evento) => (
              <article
                key={evento.id}
                className="w-96 text-left rounded-xl hover:scale-105 transition-all shadow-sm bg-white"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                    /* loading="lazy" */
                    className="rounded-t-xl h-[20rem] w-full object-cover"
                  />
                </div>
                <div className="text-zinc-700 px-5 py-4">
                  <h2 className="text-xl font-semibold">{evento.titulo}</h2>
                  <p className="text-lg py-2 font-light">
                    {evento.descripcion}
                  </p>
                  <div>
                    <p className="text-lg py-2 font-medium text-[#1d4999]">
                      {evento.fecha}
                    </p>
                    <p className="text-md py-2 font-light">{evento.lugar}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
