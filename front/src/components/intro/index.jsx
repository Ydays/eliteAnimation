import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
                <div id="home" className={"h-100"}>
                    <div
                        className={
                            "h-100"
                        }
                    >
                        <div className="containHomeContent">
                            <h1 className="h1Home">
                                {" "}
                                ENVIE DE TESTER LA <br></br> REALITE VIRTUELLE ?
                            </h1>

                            <div className={"buttonWhite"}>
                                IMMERSION
                            </div>
                        </div>
                        <img
                            className={"imgHomeBottom"}
                            src="assets/img/homme_femme_accueil.png"
                        />
                    </div>
                </div>
        )
    }
}

export default Intro;
