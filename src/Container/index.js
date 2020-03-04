import React from "react";
import { Form, Label, Input } from "reactstrap";

export const handleChange = e => {
  console.log(e.currentTarget);
  console.log(document.querySelector("select").Input);
  console.log(document.querySelector("select").textContent);
};

export default ({ titulo, contenido }) => {
  return (
    <div
      style={{
        background: "#F08080",
        border: "2px solid ",
        "border-radius": "10px 10px"
      }}
    >
      <Form style={{ margin: "10px" }}>
        <Label>
          {titulo}
          <br></br>

          <Input type="select" name="select" id={"rsp"} onChange={handleChange}>
            {contenido.opciones.map(item => (
              <option value={item.esVerdadera}>{item.nombreOpcion}</option>
            ))}
          </Input>
        </Label>
      </Form>
    </div>
  );
};
