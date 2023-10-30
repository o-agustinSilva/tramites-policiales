import React, { Component } from "react";
import Header from "./Header";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <p>This is the login page</p>
            </div>
        )
    }
}
