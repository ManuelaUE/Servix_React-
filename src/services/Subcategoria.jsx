import React from "from";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ContainerSubCategoria from "../components/ContainerSubCategoria";
import CardSubcategoria from "../card/CardSubcategoria";

import Constructor from "./../assets/images/constructor.png";
import Cerrajero from "./../assets/images/cerrajero.png";
import Pintor from "./../assets/images/pintor.png";
import Plomero from "./../assets/images/plomero.png";
import Martillo from "./../assets/images/martillo.png";
import Electricidad from "./../assets/images/electricidad.png";
import Iluminacion from "./../assets/images/iluminacion.png";
import Caja_de_herramientas from "./../assets/images/caja-de-herramientas.png";
import Apoyo_Tecnico from "./../assets/images/apoyo-tecnico.png";
import Soporte_tecnico from "./../assets/images/soporte-tecnico.png";

function Subcategoria() {
  return (
    <>
      <Navbar />

      <ContainerSubCategoria title="Subcategoria">
        <CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Constructor}
          title="Albañil"
        />

        <CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Cerrajero}
          title="Cerrajero"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Pintor}
          title="Pintor"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Plomero}
          title="Plomero"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Martillo}
          title="Reformas"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Electricidad}
          title="Instalaciones electricas"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Iluminacion}
          title="Iluminacion"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Caja_de_herramientas}
          title="Arreglos electricos"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Apoyo_Tecnico}
          title="Reparaciones tecnicas"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Iluminacion}
          title="Instalaciones tecnicas"
        />

<CardSubcategoria
          id={"obrasyreformasdehogar"}
          image={Soporte_tecnico}
          title="Tecnico general"
        />

      </ContainerSubCategoria>
      <Footer />
    </>
  );
}

export default Subcategoria();
