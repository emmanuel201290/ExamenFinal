import React, { useState } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const Principal = styled.div`
  background: #f08080;
  margin: 2px;
  height: 80px;
  border-radius: 17px 17px 17px 17px;
`;

export default ({ titulo, contenido, indice }) => {
  const [isSelected, setSelected] = useState();
  const [isEmpty, setEmpty] = useState(false);

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const validEmpty = () => {
    setEmpty(isSelected);
  };

  return (
    <Principal>
      <Form style={{ margin: "10px" }}>
        <Label style={{ color: "" }}>
          {titulo}
          <Input type="select" name="select" id="1" onChange={handleChange}>
            {contenido.opciones.map(item => (
              <option value={item.esVerdadera} selected="selected">
                {item.nombreOpcion}
              </option>
            ))}
          </Input>
        </Label>
        <Button style={{ margin: "10px" }} onClick={validEmpty}>
          Siguiente
        </Button>
        {isEmpty === "" ? (
          <Label style={{ color: "red" }}>
            <h4>{"Seleccione un valor"}</h4>
          </Label>
        ) : (
          ""
        )}
      </Form>
    </Principal>
  );
};
