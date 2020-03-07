import React, { useState } from "react";
import { useAuth } from "../utilities/useAuth";
import styled from "styled-components";
import { Wrapper } from "../Login/styles";

export default () => {
  const Principal = styled.div`
    background: #f08080;
    height: 100%;
    border-radius: 17px 17px 17px 17px;
    padding: 50px;
  `;
  const auth = useAuth();
  return (
    <Wrapper>
      <h3 style={{ textAlign: "center" }}>{"RESULTADOS"}</h3>
      <hr></hr>
      <Principal>
        {auth.isResult.map(info => {
          return (
            <div>
              <h3>{info.titulo}</h3>
              <h4>{info.item}</h4>
            </div>
          );
        })}
      </Principal>
    </Wrapper>
  );
};
