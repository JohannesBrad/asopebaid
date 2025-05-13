import React from "react";

export const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Lo sentimos, la página que buscas no existe.
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Al parecer el enlace ya no está activo o no está escrito
          correctamente. Te invitamos a regresar a la página de inicio.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Volver al inicio
        </a>
      </div>
    </>
  );
};
