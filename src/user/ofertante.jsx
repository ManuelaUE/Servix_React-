import axios from "axios";
import React, { useState, useEffect } from "react";
import toastr from "toastr";
import { useLocation } from 'react-router-dom';
import Rating  from './../components/Rating';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./../styles/components/perfilofertante.css";

import ContainerOfertante from "../container/ContainerOfertante";

function PerfilOfertante() {
    const [documento, setDocumento] = useState();
    const [tipoDocumento, setTipoDocumento] = useState();
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const [pais, setPais] = useState();
    const [estado, setEstado] = useState();
    const [ciudad, setCiudad] = useState();
    const [direccion, setDireccion] = useState();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [telefono, setTelefono] = useState();
    const [correo, setCorreo] = useState();
    const [calificacion, setCalificacion] = useState(0);
    const [calificar, setCalificar] = useState(0);
    const [ofertanteId, setOfertanteId] = useState(0);
    const [miUsuario, setMiUsuario] = useState();
    const [foto, setFoto] = useState("https://cdn-icons-png.flaticon.com/512/9133/9133228.png");

    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const id = urlParams.get('id');
        setOfertanteId(id);
        const data = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
        setMiUsuario(data)

        axios.get(`http://127.0.0.1:5000/perfil_ofertante/${id}`).then((result) => {
            setCalificacion(result.data.calificacion_promedio);
            setFechaNacimiento(result.data.usuario.fecha_nacimiento);
            setPais(result.data.usuario.pais);
            setEstado(result.data.usuario.estado);
            setCiudad(result.data.usuario.ciudad);
            setDireccion(result.data.usuario.direccion);
            setNombre(result.data.usuario.nombre);
            setApellido(result.data.usuario.apellido);
            setTelefono(result.data.usuario.telefono);
            setCorreo(result.data.usuario.correo);
            setTipoDocumento(result.data.usuario.tipo_documento);
            setDocumento(result.data.usuario.numero_document);

        });

    }, []);

    const handleRatingChange = (newRating) => {
        setCalificar(newRating);

        axios.post('http://127.0.0.1:5000/calificar_ofertante', {
            solicitante_id: miUsuario,
            calificacion: calificar,
            ofertante_id: ofertanteId
        })
        .then(response => {
            toastr.success("Usuario calificado exitosamente");
        })
        .catch(error => {
            toastr.warning("Tenemos problemas");
        });
    };

    return (
        <>
            <Navbar />

            <div style={{"width": "90%", "margin": "auto"}}>
                {foto ? (
                    <div style={{"display": "flex", "justifyContent": "center"}}>
                        <img src={foto} style={{"width": "50%"}} alt="" />
                    </div>
                        
                    ) : (<ContainerOfertante></ContainerOfertante>)
                }

                {nombre && apellido ? (
                    <ContainerOfertante text="Nombre completo">
                        <p>{nombre} {apellido}</p>
                    </ContainerOfertante>
                    ) : (<ContainerOfertante></ContainerOfertante>)
                }

                {tipoDocumento && documento ? (
                <ContainerOfertante text="Documento">
                    <p>{tipoDocumento} {documento}</p>
                </ContainerOfertante>
                    ) : ("")
                }

                {fechaNacimiento &&
                    <ContainerOfertante text="Fecha de nacimiento">
                        <p>{fechaNacimiento}</p>
                    </ContainerOfertante>
                }

                {direccion && ciudad && estado && pais ? (
                    <ContainerOfertante text="ubicacion">
                        <p>{direccion}, {ciudad}, {estado}, {pais}</p>
                    </ContainerOfertante>
                    ) : (<ContainerOfertante></ContainerOfertante>)
                }

                {correo && 
                    <ContainerOfertante text="Correo electronico">
                        <p>{correo}</p>
                    </ContainerOfertante>
                }

                {telefono && 
                    <ContainerOfertante text="Telefono">
                        <p>{telefono}</p>
                    </ContainerOfertante>
                }

                {calificacion && 
                    <ContainerOfertante text="Calificacion">
                        <Rating maxRating={5} initialRating={calificacion}></Rating>
                    </ContainerOfertante>
                }

                <ContainerOfertante text="¿Quieres calificar este usuario?">
                    <Rating maxRating={5} initialRating={calificar} onRatingChange={handleRatingChange}></Rating>
                </ContainerOfertante>

            </div>

            <Footer />
        </>
    );
}

export default PerfilOfertante;
