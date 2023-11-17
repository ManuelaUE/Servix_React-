import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import OfertanteForm from "../components/OfertanteForm";
import ContainerOfertante from "../components/ContainerOfertante";

function PerfilOfertante() {
  return (
    <>
      <Navbar />
      <OfertanteForm save="Guardar"/>
      <form>
        <ContainerOfertante text="tipo de documento">
          <select
            class="form-select"
            name="documentType"
            aria-label="Tipo de documento"
          >
            <option value="1">CC</option>
            <option value="2">CE</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Nuero de documento">
          <input
            class="form-control"
            type="number"
            name="documentNumber"
            placeholder="Numero de documento"
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Fecha de nacimiento">
          <input
            class="form-control"
            type="date"
            name="dateBorn"
            placeholder="Fecha de nacimiento"
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Pais">
          <select class="form-select" name="country" aria-label="Pais">
            <option value="1">Colombia</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Estado">
          <select class="form-select" name="documentType" aria-label="Estado">
            <option value="1">Antioquia</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Ciudad">
          <select class="form-select" name="documentType" aria-label="Ciudad">
            <option value="1">Bello</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Direccion">
          <input
            class="form-control"
            type="text"
            name="address"
            placeholder="Direccion"
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Foto del documento lado A">
          <input type="file" name="documentA"></input>
        </ContainerOfertante>

        <ContainerOfertante text="Foto del documento lado B">
        <input type="file" name="documentB" ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Selfie">
        <input type="file" name="photoUser" ></input>
        </ContainerOfertante>


      </form>
      <Footer />
    </>
  );
}

export default PerfilOfertante;
