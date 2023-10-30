import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import Login from "./components/Login";
import Tramite from "./components/Tramite";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Routes>
              <Route path="" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/tramite" element={<Tramite/>} />
          </Routes>
      </Router>
    )
  }
}

const appDiv = document.getElementById('app');
const reactRoot = createRoot(appDiv);
reactRoot.render(<App />);
