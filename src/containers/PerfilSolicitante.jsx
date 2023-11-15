import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SolicitantteForm from "../components/SolicitanteForm";

import ContainerProfileSolicitante from "../components/ContainerProfileSolicitante";

function Perfil() {
  return (
    <>
      <Navbar />
      <ContainerProfileSolicitante 
      title="Mi Perfil"
      >
        <SolicitantteForm title="Nombre" save="Guardar">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="nombre"
          ></input>
        </SolicitantteForm>

        <SolicitantteForm 
        title="Apellido"
        >
          <input
            class="form-control"
            type="text"
            name="lastName"
            placeholder="Apellido"
          ></input>
        </SolicitantteForm>

        <SolicitantteForm 
        title="Correo electronico"
        >
          <input
            class="form-control"
            type="text"
            name="email"
            placeholder="Correo electronico"
          ></input>
        </SolicitantteForm>

        <SolicitantteForm 
        title="Telefono celular"
        >
          <input
            class="form-control"
            type="text"
            name="phone"
            placeholder="xxx-xxx-xxxx"
          ></input>
        </SolicitantteForm>
        
      </ContainerProfileSolicitante>

      <Footer />
    </>
  );
}

export default Perfil;
