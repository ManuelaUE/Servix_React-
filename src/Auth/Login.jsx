import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";

import { useGoogleLogin } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import Facebook from "./../assets/images/facebook.png";
import Google from "./../assets/images/google.png";
import Logo from "./../assets/images/logo.png";

import ContainerAuth from "./../container/ContainerAuth";

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
  // Remove the unused variable 'responseFacebook'

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      toastr.success("Bienvenido");
      localStorage.setItem("user", JSON.stringify(credentialResponse.data));
      navigate("/home");
    },
    onError: () => {
      toastr.error("error al inicar sesion");
    },
  });

  return (
    <ContainerAuth image={Logo} title="Iniciar Sesion">
      <form>
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
        >
          {" "}
          Ingresar{" "}
        </button>

        <div className="d-flex justify-content-center text-center mt-5 pt-1">
          <LoginSocialFacebook
            appId="419609834082548"
            onResolve={(response) => {
              toastr.success("Bienvenido");
              localStorage.setItem("user", JSON.stringify(response.data));
              navigate("/home");
            }}
            onReject={(error) => {
              toastr.error("Error al iniciar seción");
            }}
          >
            <div className="">
              <button className="icon unstyle ">
                <img src={Facebook} alt="" />
              </button>
            </div>
          </LoginSocialFacebook>

          <div className="" onClick={() => login()}>
            <button className="icon unstyle ">
              <img src={Google} alt="" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          ¿No tienes una cuenta?{" "}
          <Link to={"/register"} className="text-info-50 fw-bold">
            Registrate aqui!
          </Link>
        </div>
      </form>
    </ContainerAuth>
  );
}

export default Login;
