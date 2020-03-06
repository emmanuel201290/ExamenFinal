import React from "react";
import Container from "../Container/index";

export default ({ isCount, contenido, nextCount }) => {
  return (
    <div>
      {
        <Container
          titulo={contenido[isCount].pregunta}
          contenido={contenido[isCount].opciones}
          nextCount={nextCount}
        />
      }
    </div>
  );
};
