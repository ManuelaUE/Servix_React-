import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";
import ContainerRegister from "../components/ContainerRegister";

import Logo from "./../assets/images/logo.png";

function Register() {
  // Definimos estados para el nombre de usuario y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

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
      return toastr.warning("Correo electronico es requerido");
    }

    if (password === "") {
      return toastr.warning("Contraseña es requerida");
    }

    if (name === "") {
      return toastr.warning("Nombre es requerido");
    }

    if (lastname === "") {
      return toastr.warning("Apellido es requerido");
    }

    if (phone === "") {
      return toastr.warning("Telefono celular es requerido");
    }

    axios
      .post("http://127.0.0.1:5000/solicitante", {
        correo: email,
        contrasena: password,
        nombre: name,
        apellido: lastname,
        telefono: phone,
      })
      .then((response) => {
        toastr.success("Usuario registrado exitosamente");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Error al registrar");
      });
  };

  return (
    <>
      <ContainerRegister 
      image={Logo} 
      title="Registro"
      >

        <form>
          <div className="form-outline form-white mt-3">
            <input
              type="text"
              placeholder="Nombre"
              id="nombre"
              className="form-control form-control-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-outline form-white mt-2">
            <input
              type="text"
              placeholder="Apellido"
              id="apellido"
              className="form-control form-control-lg"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="form-outline form-white mt-2">
            <input
              type="number"
              placeholder="Telefono celular"
              max="10"
              id="cel"
              className="form-control form-control-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-outline form-white mt-2">
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

          <div className="form-outline form-white mt-2">
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
        </form>

        <button
          className="btn btn-outline-primary btn-lg px-5 mt-2"
          onClick={handleSubmit}
          type="submit"
        >
          Registrar
        </button>

        <div>
          ¿Ya tienes una cuenta?{" "}
          <Link to={"/login"} className="text-info-50 fw-bold">
            Inicia sesion!
          </Link>
        </div>
      </ContainerRegister>
    </>
  );
}

export default Register;
