import { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle";
const Galery = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch("https://asopebaid.org.pe/data/galeria.json")
      .then((res) => res.json())
      .then((data) => {
        const lista = data.map((nombre, i) => ({
          id: i + 1,
          url: `https://asopebaid.org.pe/data/galeria/${encodeURIComponent(
            nombre
          )}`,
        }));
        setImagenes(lista);
      });
  }, []);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const imagenesVisibles = imagenes.slice(0, visibleCount);
  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Galeria"} />
      </section>

      <section className="px-4 pb-8 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {imagenesVisibles.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={`Galería ${img.id}`}
                className="w-full h-48 object-cover rounded-md shadow-sm"
              />
            ))}
          </div>

          {visibleCount < imagenes.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-[#1d4999] text-white rounded-lg hover:bg-[#153a7a] transition"
              >
                Ver más
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Galery;
