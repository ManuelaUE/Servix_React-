/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from "axios";
import toastr from "toastr";
import Rating  from './../components/Rating';

import Logo from './../assets/images/logo.png';

import './../styles/components/navbar.css';
import { googleLogout } from '@react-oauth/google';

function Navbar() {
    const navigate = useNavigate();
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [busqueda, setBusqueda] = useState([]);

    useEffect(() => {
        validateSession();
    }, []);

    const openNavBar = () => {
        document.getElementById("navbarSupportedContent").classList.toggle('show');
    }

    const closeSession = () => {
        localStorage.removeItem("user");
        try{
            googleLogout();
        }catch(error){
            
        }
        try {
            window.FB.logout(function(response) {
                console.log("Sesión de Facebook cerrada");
            }, {force: true});
        } catch(error) {
            console.error("Error al cerrar la sesión de Facebook:", error);
        }
        
    }

    const validateSession = () => {
        const user = localStorage.getItem("user");

        if(!user) {
            navigate("/login");
        }
    }

    const handleSearchClick = () => {
        setIsSearching(true);
    };
    
    const handleClearClick = () => {
        setSearchTerm('');
        setIsSearching(false);
    };
    
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);

        axios.post('http://127.0.0.1:5000/buscar/ofertante', {
            buscar: searchTerm
        })
        .then((response) => {
            setBusqueda(response.data);
        })
        .catch((error) => {
            toastr.warning('Error al realizar la petición:', error);
        });
    };

    const goToProfile = (id)  => {
        window.location.href="/ofertante?id=" + id;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/home"}>
                    <img src={Logo} alt=""/>
                </Link>

                {isSearching ? (
                    <form>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Buscar..."
                            className="navbar-toggler"
                        />
                        <button type="button" onClick={handleClearClick} className="navbar-toggler">
                            <FaTimes />
                        </button>
                    </form>
                ) : (
                    <button onClick={handleSearchClick} className="navbar-toggler">
                        <FaSearch />
                    </button>
                )}

                {busqueda.length > 0 && 
                    <div className="search">
                        {busqueda.map((resultado, index) => (
                            <div key={index} className='listaBusqueda' onClick={() => goToProfile(resultado.id)}>
                                <div>{resultado.nombre} {resultado.apellido}</div>
                                <div>
                                    <Rating Rating maxRating={5} initialRating={resultado.suma_calificaciones / resultado.cantidad_calificaciones}></Rating>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <button className="navbar-toggler" type="button" onClick={openNavBar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/home"}>Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={"/services"}>Servicios</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile"}>Perfil</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={closeSession} to={"/login"}>Cerrar sesion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;