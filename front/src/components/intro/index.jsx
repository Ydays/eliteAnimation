import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
                <div id="home" className={"container-fluid position-relative h-100"}>
                    <div className={"particles-js"}> </div>
                    <div
                        className={
                            "row h-100 justify-content-center align-items-center text-center"
                        }
                    >
                        <div>
                            <h1 className={"home-text"}>
                                {" "}
                                ENVIE DE GOÛTER A UNE NOUVELLE AVENTURE ?
                            </h1>

                            <div className={"text-center"}>
                                <a
                                    id="imersion-text"
                                    href="#"
                                    className={
                                        "btn btn-lg btn-outline-dark m-5 rounded-pill py-2 px-5"
                                    }
                                    tabIndex={"-1"}
                                    role="button"
                                >
                                    IMMERSION
                                </a>
                            </div>
                        </div>

                        <div className={"position-absolute fixed-bottom text-center"}>
                            <img
                                className={"img-banner w-100"}
                                src="assets/img/homme_femme_accueil.png"
                            />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Intro;
