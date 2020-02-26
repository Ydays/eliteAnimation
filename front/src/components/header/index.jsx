import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
        <div class="navbar">
            <div class="navbarLogo">
                <img src="" alt=""/>
            </div>    
        <div className={"navbarItem"}>
            <a className={"nav-link active"} href="#home">
                ACCUEIL <span className={"sr-only"}>(current)</span>
            </a>

            <a className={"nav-link"} href="#presentation">
                PRESENTATION
            </a>

            <a className={"nav-link"} href="#vr-games">
                JEUX VR
            </a>

            <a className={"nav-link"} href="#contact">
                CONTACT
            </a>

            <a className={"nav-link"} href="#want-more">
                ENVIE DE PLUS ?
            </a>
        </div>
        </div>
        );
    }
}

export default Header;
