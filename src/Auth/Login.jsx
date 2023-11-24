import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";

import Facebook from "./../assets/images/facebook.png";
import Google from "./../assets/images/google.png";
import Logo from "./../assets/images/logo.png";

import ContainerLogin from "../container/ContainerLogin";

function Login() {
  // Definimos estados para el nombre de usuario y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      return toastr.warning("El correo es requerido");
    }

    if (password === "") {
      return toastr.warning("La contraseña es requerida");
    }

    axios
      .post("http://127.0.0.1:5000/solicitante/login", {
        correo: email,
        contrasena: password,
      })
      .then((response) => {
        toastr.success(`¡Bienvenido!`);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/home");
      })
      .catch((err) => {
        toastr.error(err.response.data.error);
      });
  };

  return (
    <ContainerLogin
    image= {Logo}
    title="Iniciar Sesion">
   
      <div className="form-outline form-white mb-4 mt-5">
        <input
          type="email"
          placeholder="Correo electronico"
          id="correo"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-outline form-white mb-4">
        <input
          type="password"
          placeholder="Contraseña"
          id="contrasena"
          className="form-control form-control-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        className="btn btn-outline-primary btn-lg px-5 mt-3"
        onClick={handleSubmit}
        type="submit"
      > Ingresar </button>

      <div className="d-flex justify-content-center text-center mt-5 pt-1">
        <a href="https://www.facebook.com/" className="text-dark">
          <div className="icon">
            <img src={Facebook} alt="" />
          </div>
        </a>
        <a
          href="https://www.google.com/intl/es-419/gmail/about/"
          className="text-dark"
        >
          <div className="icon">
            <img src={Google} alt="" />
          </div>
        </a>
      </div>

      <div>
        ¿No tienes una cuenta?{" "}
        <Link to={"/register"} className="text-info-50 fw-bold">
          Registrate aqui!
        </Link>
      </div>
    </ContainerLogin>
  );
}

export default Login;
