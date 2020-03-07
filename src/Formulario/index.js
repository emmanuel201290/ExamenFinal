import React, { useState } from "react";
import { Wrapper } from "../Login/styles";
import ShowNextComponent from "../Container/showNextComponent";

export default () => {
  const [isCount, setCount] = useState(0);

  const nextCount = indice => {
    setCount(indice);
  };

  const contenido = [
    {
      pregunta: "Cuanto es 2 * 2 ?",
      id: 0,
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
    },
    {
      pregunta: "Cuanto es 2 * 5 ?",
      id: 1,
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
    },
    {
      pregunta: "Cuanto es 9 - 9 ?",
      id: 2,
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
    },
    {
      pregunta: "Cuanto es 7 + 1 ?",
      id: 3,
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
    },
    {
      pregunta: "Cuanto es 10 * 2 ?",
      id: 4,
      opciones: [
        {
          nombreOpcion: "",
          esVerdadera: null
        },
        {
          nombreOpcion: "10",
          esVerdadera: false
        },
        {
          nombreOpcion: "20",
          esVerdadera: true
        }
      ]
    },
    {
      pregunta: "Presione finalizar para ver las preguntas seleccionadas",
      id: 5,
      opciones: []
    }
  ];

  return (
    <Wrapper>
      <ShowNextComponent
        contenido={contenido}
        nextCount={nextCount}
        isCount={isCount}
      />
    </Wrapper>
  );
};
