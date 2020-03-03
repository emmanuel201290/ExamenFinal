import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/Login"> Login</Link>
          </li>
          <li>
            <Link to="/">Home (/)</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
