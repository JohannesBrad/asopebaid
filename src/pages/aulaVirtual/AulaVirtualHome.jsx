import React, { useState } from "react";
import { useAsopebaidData } from "../../hooks/useAsopebaidData";

const AulaVirtualHome = () => {
  const { data } = useAsopebaidData();
  const videosAula = data.filter((item) => item.tipo === "videos-aulavirtual");
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <>
      <div className="min-h-screen pt-[8rem] bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center mb-8">Aula Virtual</h2>

        <div className="max-w-screen-xl mx-auto px-4 py-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {videosAula.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.url)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white transition transform hover:scale-105 hover:shadow-lg"
              >
                <div className="aspect-video relative bg-red-500">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 py-3">
                    <p className="text-white text-base font-semibold">
                      {video.titulo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-black rounded-lg overflow-hidden w-full max-w-3xl p-4 relative">
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setSelectedVideo(null)}
              >
                &times;
              </button>
              <div className="aspect-video">
                <video controls autoPlay className="w-full h-full">
                  <source src={selectedVideo} type="video/mp4" />
                  Tu navegador no soporta la etiqueta <code>video</code>.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AulaVirtualHome;
