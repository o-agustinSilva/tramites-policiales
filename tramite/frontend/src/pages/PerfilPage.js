import React, { Component } from "react";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import ProfileBox from "../components/ProfileBox";


export function PerfilPage() {    
    return ( 
        <div>
            <Header/>
            <ProfileImage/>
            <ProfileBox/>
        </div>
    )
}
