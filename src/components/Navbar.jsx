import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from './../assets/images/logo.png';

import './../styles/components/navbar.css';

function Navbar() {
    const navigate = useNavigate();

    useEffect(() => {
        validateSession();
    }, []);

    const openNavBar = () => {
        document.getElementById("navbarSupportedContent").classList.toggle('show');
    }

    const closeSession = () => {
        localStorage.removeItem("user");
    }

    const validateSession = () => {
        const user = localStorage.getItem("user");

        if(!user) {
            navigate("/login");
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/home"}>
                    <img src={Logo} alt=""/>
                </Link>
            
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