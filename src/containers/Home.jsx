import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Carpintero from "./../assets/images/carpintero.jpg";
import Constructor from "./../assets/images/constructor.png";
import ContainerHome from "../components/ContainerHome";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Navbar />
      <ContainerHome>
        <Card
          title="Carpintero"
          image={Carpintero}
          link={"#"}
          text="Los Carpinteros ajustan, controlan y manejan maquinaria y materiales
        con el fin de construir, instalar, reparar y demoler estructuras y
        componentes fabricados en madera (o sustitutos de esta), acero
        liviano, aluminio, entre otros."
          titleLink="Ver más"
        />

        <Card
          title="Constructor"
          image={Constructor}
          link={"#"}
          text="Son los encargados de desarrollar la edificación y los
         responsables de la ejecución en cuestión de montaje, control,
         además de ser quienes conocen los materiales, equipos y tecnología
         necesaria para llevar a cabo los proyectos en construcción."
          titleLink="Ver más"
        />
      </ContainerHome>

      <Footer />
    </>
  );
}

export default Home;
