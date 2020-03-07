import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import ProtectedRoute from "./utilities/ProtectedRouter";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

export default function App() {
  return (
    <div>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/Login"> Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Formulario">Formulario</Link>
          </li>
          <li>
            <Link to="/Resultado">Resultado</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Formulario" component={Formulario}></Route>
        <Route path="/Resultado" component={Resultado}></Route>

        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}
