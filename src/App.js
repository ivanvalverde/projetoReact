import React, { Component } from 'react';
import './App.css';
import Contatos from './components/contatos/index.js';
import Header from './components/header/index.js';
import Footer from './components/footer/index.js';
import Sobre from './components/sobre/index.js';
import Principal from './components/principal/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  render() {

    return (
      <section className="pagina-contatos">


        <BrowserRouter>
          <Header className="pagina-contatos-header" />
          <Switch>

            <Route exact path="/sobre">
              <Sobre className="pagina-contatos-main" />
            </Route>

            <Route exact path="/">
              <Principal />
            </Route>

            <Route exact path='/contatos'>
              <Contatos className="pagina-contatos-main" />
            </Route>

          </Switch>
          <Footer className="pagina-contatos-footer" />
        </BrowserRouter>


      </section>
    );

  }
}

export default App;
