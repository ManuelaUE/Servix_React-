import axios from "axios";
import React, { useState, useEffect } from "react";
import toastr from "toastr";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./../styles/components/perfilsolicitante.css";

import ContainerOfertante from "../container/ContainerOfertante";

function PerfilOfertante() {
  const [fullname, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [foto, setFoto] = useState();
  const [selphie, setSelphieUrl] = useState("https://cdn-icons-png.flaticon.com/512/9133/9133228.png");

  useEffect(() => {

    const data = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";

    setName(data.nombre || '');
    setLastname(data.apellido || '');
    setPhone(data.telefono || '');
    setEmail(data.correo || '');

    console.log(data)
  }, []);

  const save = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("foto", foto);

      await axios.post("http://127.0.0.1:5000/solicitante/register", formData);

      toastr.success(`Exitosamente`);
    } catch (err) {
      toastr.error(err.response.data.error);
    }
  };

  const openImage = () => {
    document.getElementById("upload-img").click();
  }

  const uploadSelphie = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFoto(file);
      const url = URL.createObjectURL(file);
      setSelphieUrl(url);
    }
  };

  function changeRol() {
    const verify = window.confirm("¿Estás seguro de cambiar a ofertante? No podrás cambiar nuevamente a solicitante");

    if (verify) {
        ("#makeMeOffer").css("display", "none");
        ("#informationOffer").css("display", "block");
    }
}

  return (
    <>
      <Navbar />

      <div className="profile-image">
        <img
          src={selphie}
          alt=""
        />

        <button onClick={openImage}>Subir Foto</button>

        <input type="file" id="upload-img" onChange={uploadSelphie} hidden />
      </div>

      <form className="mb-5" style={{ padding: "3em" }}>
        <ContainerOfertante text="Nombre">
          <input className="form-group form-control-lg" type="text" value={fullname} onChange={(e) => setName(e.target.value)} />
        </ContainerOfertante>

        <ContainerOfertante text="Apellido">
          <input className="form-group form-control-lg" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </ContainerOfertante>

        <ContainerOfertante text="Telefono Celular">
          <input className="form-group form-control-lg" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </ContainerOfertante>

        <ContainerOfertante text="Correo electronico">
          <input className="form-group form-control-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </ContainerOfertante>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={save}>
              Guardar
            </button>
          </div>

          <div class="col-sm-offset-2 col-sm-10 d-flex justify-content-center ">
              <button className="btn btn-secondary" onClick= {changeRol}> Hacerme ofertante </button>
            </div>
        </div>
      </form>
      
      <Footer />
    </>
  );
}

export default PerfilOfertante;
