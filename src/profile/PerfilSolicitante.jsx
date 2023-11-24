import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SolicitanteForm from "../form/SolicitanteForm";

import ContainerSolicitante from "../components/ContainerSolicitante";

function PerfilSolicitante() {
  return (
    <>
      <Navbar />
      <ContainerSolicitante 
      title="Mi Perfil"
      >
        <SolicitanteForm 
        title="Nombre" 
        save="Guardar"
        text="Hacerme Ofertante"
        >
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="nombre"
          ></input>
        </SolicitanteForm>

        <SolicitanteForm 
        title="Apellido"
        >
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Apellido"
          ></input>
        </SolicitanteForm>

        <SolicitanteForm 
        title="Correo electronico"
        >
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Correo electronico"
          ></input>
        </SolicitanteForm>

        <SolicitanteForm 
        title="Telefono celular"
        >
          <input
            className="form-control"
            type="text"
            name="phone"
            placeholder="xxx-xxx-xxxx"
          ></input>
        </SolicitanteForm>
        
      </ContainerSolicitante>

      <Footer />
    </>
  );
}

export default PerfilSolicitante;
