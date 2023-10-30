import React, { Component } from "react";
import Header from "./Header";

export default class Tramite extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>This is the "tramite" page</p>
            </div>
        )
    }
}