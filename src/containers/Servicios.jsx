import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ContainerServicios from "../components/ContainerServicios";
import CardServices from "../components/CardServices";

import Martillo from "./../assets/images/martillo.png";
import Tecnico from "./../assets/images/apoyo-tecnico.png";
import Electricidad from "./../assets/images/electricidad.png";


function Servicios(){
    return(
        <>
        <Navbar/>
        <ContainerServicios 
        title="Categorias"
        >
          <CardServices
          link={"/subcategorias.html?categoria=obrasyreformasdehogar"}
          image={Martillo}
          title="Obras y reformas de hogar"
          />

          <CardServices
          link={"/subcategorias.html?categoria=redelectrica"}
          image={Electricidad}
          title="Servicios tecnicos"
          />
          
          <CardServices
          link={"/subcategorias.html?categoria=serviciostecnicos"}
          image={Tecnico}
          title="Red Electrica"
          />


        </ContainerServicios>

        <Footer/>
        </>
    );
}

export default Servicios;