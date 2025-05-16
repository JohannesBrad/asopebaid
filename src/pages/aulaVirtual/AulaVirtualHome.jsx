import React, { useState } from "react";

/* const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/kXYiU_JCYtU" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/e-ORhEE9VVg" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/l9PxOanFjxQ" },
  { id: 7, title: "Video 7", url: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
  { id: 8, title: "Video 8", url: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
]; */

const videos = [
  {
    id: 1,
    title: "Clase 1: Introducción",
    url: "https://asopebaid.org.pe/videos/Clase_1.mp4",
    thumbnail: "https://asopebaid.org.pe/videos/thumbnails/clase1.jpg",
    type: "mp4",
  },
  {
    id: 2,
    title: "Clase 2: Estrategias",
    url: "https://asopebaid.org.pe/videos/Clase_3.mp4",
    thumbnail: "https://asopebaid.org.pe/videos/thumbnails/clase3.jpg",
    type: "mp4",
  },
  {
    id: 3,
    title: "Clase 3: Evaluación",
    url: "https://asopebaid.org.pe/videos/Clase_4.mp4",
    thumbnail: "https://asopebaid.org.pe/videos/thumbnails/clase4.jpg",
    type: "mp4",
  },
  {
    id: 4,
    title: "Clase 4: Cierre",
    url: "https://asopebaid.org.pe/videos/Clase_5.mp4",
    thumbnail: "https://asopebaid.org.pe/videos/thumbnails/clase5.jpg",
    type: "mp4",
  },
];
const AulaVirtualHome = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <>
      <div className="min-h-screen pt-[8rem] bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center mb-8">Aula Virtual</h2>

        <div className="max-w-screen-xl mx-auto px-4 py-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.url)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white transition transform hover:scale-105 hover:shadow-lg"
              >
                <div className="aspect-video relative bg-red-500">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 py-3">
                    <p className="text-white text-base font-semibold">
                      {video.title}
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
