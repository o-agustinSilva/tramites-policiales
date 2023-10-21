import React, { Component } from "react";
import Login from "./Login";
import Tramite from "./Tramite";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
        <Router>
            <Routes>
                <Route path="" element={<p>This is my home page</p>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/tramite" element={<Tramite/>} />
            </Routes>
        </Router>
        )
    }
}
