import { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle";

const Galery = () => {
  const [imagenes, setImagenes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [modalIndex, setModalIndex] = useState(null); // 🆕 usamos índice

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const imagenesVisibles = imagenes.slice(0, visibleCount);

  const handleKeyDown = (e) => {
    if (modalIndex === null) return;
    if (e.key === "ArrowRight") {
      setModalIndex((prev) => (prev + 1) % imagenes.length);
    } else if (e.key === "ArrowLeft") {
      setModalIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    } else if (e.key === "Escape") {
      setModalIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, imagenes.length]);

  return (
    <>
      <section className="py-8 pt-[10rem] md:pt-[12rem] text-center bg-zinc-100">
        <PageTitle pageTitle={"Galería"} />
      </section>

      <section className="px-4 pb-8 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {imagenesVisibles.map((img, i) => (
              <img
                key={img.id}
                src={img.url}
                alt={`Galería ${img.id}`}
                onClick={() => setModalIndex(i)}
                className="w-full h-48 object-cover rounded-md shadow-sm cursor-pointer hover:scale-105 transition"
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

      {/* MODAL con navegación */}
      {modalIndex !== null && (
        <div
          /* className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4" */
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 bg-white/70 text-[#1d4999] hover:bg-[#e6e6e6] shadow-lg rounded-full w-11 h-11 flex items-center justify-center text-2xl transition"
              aria-label="Cerrar"
            >
              &times;
            </button>

            {/* FLECHA IZQUIERDA */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-[#1d4999] hover:bg-[#e6e6e6] shadow-lg rounded-full w-11 h-11 flex items-center justify-center text-2xl transition"
              onClick={() =>
                setModalIndex(
                  (prev) => (prev - 1 + imagenes.length) % imagenes.length
                )
              }
              aria-label="Anterior"
            >
              &#10094;
            </button>

            {/* FLECHA DERECHA */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-[#1d4999] hover:bg-[#e6e6e6] shadow-lg rounded-full w-11 h-11 flex items-center justify-center text-2xl transition"
              onClick={() =>
                setModalIndex((prev) => (prev + 1) % imagenes.length)
              }
              aria-label="Siguiente"
            >
              &#10095;
            </button>

            {/* IMAGEN */}
            <img
              src={imagenes[modalIndex].url}
              alt={`Imagen ${modalIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Galery;
