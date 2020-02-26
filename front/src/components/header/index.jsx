import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
        <div className={"navbar"}>
            <div className="navbarLogo">
                <img className="logoImg" src="assets/img/logo192.png" alt=""/>
            </div>
            <div className="burgerMenu">
                <div className="bar bar1"></div> 
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>   
            </div>    
            <div className={"navbarItems"}>
                <a className={"nav-link"} href="#home">
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
