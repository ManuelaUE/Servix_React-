import axios from "axios";
import React, { useState } from "react";
import toastr from "toastr";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./../styles/components/perfilofertante.css";

import ContainerOfertante from "../container/ContainerOfertante";

function PerfilOfertante() {
  const [sideAUrl, setSideAUrl] = useState("https://cdn-icons-png.flaticon.com/512/3381/3381635.png");
  const [sideBUrl, setSideBUrl] = useState("https://cdn-icons-png.flaticon.com/512/3381/3381635.png");
  const [selphie, setSelphieUrl] = useState("https://cdn-icons-png.flaticon.com/512/9133/9133228.png");
  const [tipoDocumento, setTipoDocumento] = useState();
  const [numeroDocumento, setNumeroDocumento] = useState();
  const [fechaNacimiento, setFechaNacimiento] = useState();
  const [pais, setPais] = useState();
  const [estado, setEstado] = useState();
  const [ciudad, setCiudad] = useState();
  const [direccion, setDireccion] = useState();
  const [documentoA, setDocumentoA] = useState();
  const [documentoB, setDocumentoB] = useState();
  const [foto, setFoto] = useState();

  const uploadSideA = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      setDocumentoA(file);
      const url = URL.createObjectURL(file);
      setSideAUrl(url);
    }
  };

  const uploadSideB = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      setDocumentoB(file);
      const url = URL.createObjectURL(file);
      setSideBUrl(url);
    }
  };

  const uploadSelphie = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      setFoto(file);
      const url = URL.createObjectURL(file);
      setSelphieUrl(url);
    }
  };

  const save = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData();
      formData.append("tipoDocumento", tipoDocumento);
      formData.append("numeroDocumento", numeroDocumento);
      formData.append("fechaNacimiento", fechaNacimiento);
      formData.append("pais", pais);
      formData.append("estado", estado);
      formData.append("ciudad", ciudad);
      formData.append("direccion", direccion);
      formData.append("documentoA", documentoA);
      formData.append("documentoB", documentoB);
      formData.append("foto", foto);

      await axios.post('http://127.0.0.1:5000/ofertante/register', formData);

      toastr.success(`Exitosamente`);
    } catch (err) {
      toastr.error(err.response.data.error);
    }
  }

  return (
    <>
      <Navbar />
      <form className="mb-5" style={{"padding": "3em"}}>
        <ContainerOfertante text="tipo de documento">
          <select
            className="form-select form-control-lg"
            name="documentType"
            aria-label="Tipo de documento"
            onChange={(e) => setTipoDocumento(e.target.value)}
          >
            <option value="">Seleccionar tipo de documento</option>
            <option value="1">CC</option>
            <option value="2">CE</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Numero de documento">
          <input
            className="form-control form-control-lg"
            type="number"
            name="documentNumber"
            placeholder="Numero de documento"
            onChange={(e) => setNumeroDocumento(e.target.value)}
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Fecha de nacimiento">
          <input
            className="form-control form-control-lg"
            type="date"
            name="dateBorn"
            placeholder="Fecha de nacimiento"
            onChange={(e) => setFechaNacimiento(e.target.value)}
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Pais">
          <select className="form-select form-control-lg" name="country" aria-label="Pais" onChange={(e) => setPais(e.target.value)}>
            <option value="">Seleccionar pais</option>
            <option value="1">Colombia</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Estado">
          <select className="form-select form-control-lg" name="documentType" aria-label="Estado" onChange={(e) => setEstado(e.target.value)}>
            <option value="">Seleccionar estado</option>
            <option value="1">Antioquia</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Ciudad">
          <select className="form-select form-control-lg" name="documentType" aria-label="Ciudad" onChange={(e) => setCiudad(e.target.value)}>
            <option value="">Seleccionar ciudad</option>
            <option value="1">Bello</option>
          </select>
        </ContainerOfertante>

        <ContainerOfertante text="Direccion">
          <input
            className="form-control form-control-lg"
            type="text"
            name="address"
            placeholder="Direccion"
            onChange={(e) => setDireccion(e.target.value)}
          ></input>
        </ContainerOfertante>

        <ContainerOfertante text="Foto del documento lado A">
          <div className="form-group custom-drop-file text-center">
            <input type="file" className="form-control" id="img-upload" name="documentA" placeholder="Upload a picture" onChange={uploadSideA} />
            <img src={sideAUrl} alt="icon" />
            <p>Upload Picture</p>
          </div>
        </ContainerOfertante>

        <ContainerOfertante text="Foto del documento lado B">
          <div className="form-group custom-drop-file text-center">
            <input type="file" className="form-control" id="img-upload" name="documentB" placeholder="Upload a picture" onChange={uploadSideB}  />
            <img src={sideBUrl} alt="icon" />
            <p>Upload Picture</p>
          </div>
        </ContainerOfertante>

        <ContainerOfertante text="Selfie">
         <div className="form-group custom-drop-file text-center">
            <input type="file" className="form-control" id="img-upload" name="photoUser" placeholder="Upload a picture" onChange={uploadSelphie}  />
            <img src={selphie} alt="icon" />
            <p>Upload Picture</p>
          </div>
        </ContainerOfertante>

        
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={save}>Guardar</button>
          </div>
        </div>

      </form>
      <Footer />
    </>
  );
}

export default PerfilOfertante;
