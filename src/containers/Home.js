import React from "react";
import { Link } from "react-router-dom";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

import Carpintero from './../assets/images/carpintero.jpg';
import Constructor from './../assets/images/constructor.png';

function Home () {
    return (
        <div>
            <Navbar />

            <div className="container mb-3 pb-5">
                <div className="row d-flex flex-row justify-content-center align-items-center">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <div className="card mt-3">
                            <img src={Carpintero} className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">Carpintero</h5>
                                <p className="card-text">
                                    Los Carpinteros ajustan, controlan y manejan maquinaria y
                                    materiales con el fin de construir, instalar, reparar y demoler
                                    estructuras y componentes fabricados en madera (o sustitutos de
                                    esta), acero liviano, aluminio, entre otros.
                                </p>
                                <Link to={"#"} className="btn btn-primary">Ver mas</Link>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <img src={Constructor} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Constructor</h5>
                                <p className="card-text">
                                    Son los encargados de desarrollar la edificación y los
                                    responsables de la ejecución en cuestión de montaje, control,
                                    además de ser quienes conocen los materiales, equipos y
                                    tecnología necesaria para llevar a cabo los proyectos en
                                    construcción.
                                </p>
                                <Link to={"#"} className="btn btn-primary">Ver mas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;