import React from "react";
import { Form, Label, Input } from "reactstrap";
import styled from "styled-components";

export const handleChange = e => {
  console.log(e.currentTarget);
  console.log(document.querySelector("select").Input);
  console.log(document.querySelector("select").textContent);
};

const Principal = styled.div`
  background: #f08080;
  border: 2px solid;
  margin: 2px;
`;

export default ({ titulo, contenido }) => {
  return (
    <Principal>
      <Form style={{ margin: "10px" }}>
        <Label>
          {titulo}
          <br></br>

          <Input type="select" name="select" id={"1"} onChange={handleChange}>
            {contenido.opciones.map(item => (
              <option value={item.esVerdadera}>{item.nombreOpcion}</option>
            ))}
          </Input>
        </Label>
      </Form>
    </Principal>
  );
};
