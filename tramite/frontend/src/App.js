import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import LoginPage from "./components/Login";
import TramitePage from "./components/Tramite";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RequestTramite from './components/RequestTramite';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/tramite" element={<TramitePage/>} />
              <Route path="/solicitarTramite" element={<RequestTramite/>} />
          </Routes>
      </Router>
    )
  }
}

const appDiv = document.getElementById('app');
const reactRoot = createRoot(appDiv);
reactRoot.render(<App />);
