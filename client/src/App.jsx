import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/navigation/index.css";
import Navbar from "./components/navigation/Navbar";
import Landing from "./components/navigation/Landing";
import Login from "./components/navigation/Login";
import Register from "./components/navigation/Register";
import Dashboard from "./components/navigation/Dashboard";
import Folders from "./components/navigation/Folders";
import Contactos from "./components/navigation/Contactos";
import Archivos from "./components/navigation/Archivos";
import Margens from "./components/navigation/Margens";
import Dfolders from "./components/navigation/Dfolders2";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Margens />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/folders" component={Folders} />
            <Route exact path="/archivos" component={Archivos} />
            <Route exact path="/contactos" component={Contactos} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/micuenta" component={Dashboard} />
            <Route exact path="/dfolders" component={Dfolders} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
