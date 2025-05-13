import React, { useState } from "react";

const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/kXYiU_JCYtU" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/e-ORhEE9VVg" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/l9PxOanFjxQ" },
  { id: 7, title: "Video 7", url: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
  { id: 8, title: "Video 8", url: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
];
const AulaVirtualHome = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <>
      <div className="min-h-screen pt-[8rem] bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center mb-8">Aula Virtual</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedVideo(video.url)}
            >
              <div className="aspect-video bg-gray-800 group-hover:scale-105 transition-transform duration-300">
                <iframe
                  className="w-full h-full object-cover pointer-events-none"
                  src={video.url + "?controls=0"}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 text-sm font-semibold">
                {video.title}
              </div>
            </div>
          ))}
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
                <iframe
                  className="w-full h-full"
                  src={selectedVideo + "?autoplay=1"}
                  title="Video modal"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AulaVirtualHome;
