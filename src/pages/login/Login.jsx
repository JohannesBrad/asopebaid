import React, { useState } from "react";
import logoAsopebaid from "../../assets/logo-asopebaid4.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga del navegador
    let isValid = true;

    // Validación simple
    setEmailError("");
    setPasswordError("");
    setFormError("");

    if (!email) {
      setEmailError("El correo es obligatorio.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Correo inválido.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
      isValid = false;
    }

    if (!isValid) return;

    // Aquí puedes hacer el fetch al backend PHP
    /*     fetch("https://tusitio.com/backend/login.php", { */
    fetch("https://asopebaid.org.pe/api/login.php", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error en login");

        console.log("Respuesta del servidor:", data);

        if (data.status === "success") {
          console.log("Login exitoso");
          window.location.href = "/aula-virtual"; // O usa navigate('/aula-virtual') si usas React Router
        }
      })
      .catch((err) => {
        setFormError(err.message || "Error al iniciar sesión.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 text-gray-600">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-8 pb-10 mb-4 mt-4 w-full max-w-sm">
        <div className="flex justify-center mb-4 py-6">
          <img
            src={logoAsopebaid}
            alt="Asopebaid"
            className="w-[14rem] md:w-64"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-5">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label>Contraseña</label>
            <input
              type="password"
              className="bg-zinc-100 text-sm border-blue-200 rounded-md p-2"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2"
            >
              Iniciar sesión
            </button>
            {formError && (
              <p className="text-red-500 text-xs text-center">{formError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
