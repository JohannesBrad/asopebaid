import React, { useState } from "react";
import logoAsopebaid from "../../assets/logo-asopebaid4.png";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //const [email, setEmail] = useState("");

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    try {
      const res = await fetch("https://asopebaid.org.pe/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al registrar");

      setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
      setNombre("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setFormError(err.message);
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    try {
      const res = await fetch("https://asopebaid.org.pe/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify({ nombre, email, telefono, password }),
        body: JSON.stringify({ nombre, correo, telefono, dni, password }),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Respuesta del servidor no es válida.");
      }

      if (!res.ok || data.status !== "success") {
        throw new Error(data.message || "Error al registrar.");
      }

      setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
      setNombre("");
      setCorreo("");

      //setEmail("");
      setDni("");
      setTelefono("");
      setPassword("");

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 text-gray-600">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-8 pb-10 mb-4 mt-4 w-full max-w-sm">
        <div className="flex justify-center mb-2 py-4">
          <img
            src={logoAsopebaid}
            alt="Asopebaid"
            className="w-[14rem] md:w-64"
          />
        </div>

        <h2 className="text-2xl font-bold mb-5 text-center text-[#1d4999]">
          Nuevo Registro
        </h2>

        <form onSubmit={handleSubmit}>
          {formError && <p className="text-red-600">{formError}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}

          <div className="flex flex-col gap-2 mb-4">
            <label>Nombre y Apellido</label>
            <input
              type="text"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder=""
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            {/*   {emailError && <p className="text-red-500 text-xs">{emailError}</p>} */}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label>DNI</label>
            <input
              type="text"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder=""
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
            {/*   {emailError && <p className="text-red-500 text-xs">{emailError}</p>} */}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder=""
              /* value={email} */
              /* onChange={(e) => setEmail(e.target.value)} */
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            {/*   {emailError && <p className="text-red-500 text-xs">{emailError}</p>} */}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label>Teléfono</label>
            <input
              type="telefono"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder=""
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            {/*   {emailError && <p className="text-red-500 text-xs">{emailError}</p>} */}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label>Contraseña</label>
            <input
              type="password"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/*     {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )} */}
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2"
            >
              Registrarse
            </button>
            {/*      {formError && (
              <p className="text-red-500 text-xs text-center">{formError}</p>
            )} */}
          </div>

          {/*          <div className="text-center gap-2 flex justify-center items-center text-sm">
            <span className="">¿No tienes cuenta?</span>
            <Link
              preventDefault
              to="/register"
              className="text-blue-600 hover:text-blue-700"
            >
              Regístrate
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
