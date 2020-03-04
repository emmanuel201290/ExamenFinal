import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Wrapper } from "../Login/styles";
import Container from "../Container/index";

export default () => {
  const contenido = {
    opciones: [
      {
        nombreOpcion: "",
        esVerdadera: null
      },
      {
        nombreOpcion: "4",
        esVerdadera: true
      },
      {
        nombreOpcion: "15",
        esVerdadera: false
      }
    ]
  };

  const contenido2 = {
    opciones: [
      {
        nombreOpcion: "",
        esVerdadera: null
      },
      {
        nombreOpcion: "8",
        esVerdadera: false
      },
      {
        nombreOpcion: "10",
        esVerdadera: true
      }
    ]
  };

  const contenido3 = {
    opciones: [
      {
        nombreOpcion: "",
        esVerdadera: null
      },
      {
        nombreOpcion: "2",
        esVerdadera: false
      },
      {
        nombreOpcion: "0",
        esVerdadera: true
      }
    ]
  };

  const contenido4 = {
    opciones: [
      {
        nombreOpcion: "",
        esVerdadera: null
      },
      {
        nombreOpcion: "8",
        esVerdadera: true
      },
      {
        nombreOpcion: "10",
        esVerdadera: false
      }
    ]
  };

  const contenido5 = {
    opciones: [
      {
        nombreOpcion: "",
        esVerdadera: null
      },
      {
        nombreOpcion: "18",
        esVerdadera: false
      },
      {
        nombreOpcion: "20",
        esVerdadera: true
      }
    ]
  };
  return (
    <Wrapper>
      <Container titulo={"Cuanto es 2 * 2 ?"} contenido={contenido} />
      <Container titulo={"Cuanto es 2 * 5 ?"} contenido={contenido2} />
      <Container titulo={"Cuanto es 90 - 90 ?"} contenido={contenido3} />
      <Container titulo={"Cuanto es 7 + 1 ?"} contenido={contenido4} />
      <Container titulo={"Cuanto es 10 * 2 ?"} contenido={contenido5} />
    </Wrapper>
  );
};
