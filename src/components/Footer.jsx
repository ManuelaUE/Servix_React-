import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {faCreditCard } from "@fortawesome/free-solid-svg-icons";

import './../styles/components/footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto bg-light ">
            <div className="container-fluid">
                <div className="col d-flex flex-wrap justify-content-center align-content-center align-items-center">
                    

                    <div className="items-submenu">
                        <Link to={""}>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;