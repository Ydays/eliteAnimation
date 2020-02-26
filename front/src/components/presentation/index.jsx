import React, { Component } from 'react';


class Presentation extends Component {
    render() {
        return (
            <div className={"main-content h-100 vw-100"}>
            <div
                id="presentation"
                className={"container-fluid position-relative h-100"}
            >
                <div className={"particles-js"}> </div>
                <div className={"row h-50 py-md-5"}>
                    <div className={"col-md-4 p-md-5"} data-aos="fade-down">
                        <h1>POURQUOI ?</h1>
                        Pour vos évènements festifs comme des cocktails, mariages,
                        anniversaires, séminaires, festivals, foires, salons, portes
                        ouvertes ...
                    </div>
                    <div className={"col-md-4"}></div>
                    <div className={"col-md-4 p-md-5"} data-aos="fade-down">
                        <h1>POURQUOI NOUS ?</h1>
                        Pour vos évènements festifs comme des cocktails, mariages,
                        anniversaires, séminaires, festivals, foires, salons, portes
                        ouvertes ...
                    </div>
                </div>

                <div className={"row h-50"}>
                    <div className={"col-md-3 p-md-5"} data-aos="fade-down">
                        <h1>POUR QUI ?</h1>
                        Pour les comités d'entreprises. les BDE, les centres commerciaux,
                        les structures institutionnelles, les comités des fêtes, les
                        professionnels ...
                    </div>
                    <div className={"col-md-3"}></div>
                    <div className={"col-md-3"}></div>

                    <div className={"col-md-3 p-md-5"} data-aos="fade-down">
                        <h1>NOS ENGAGEMENTS</h1>
                        Pour les comités d'entreprises. les BDE, les centres commerciaux,
                        les structures institutionnelles, les comités des fêtes, les
                        professionnels ...
                    </div>

                    <div
                        className={"presentationContainImage text-center"}
                        data-aos="fade-up"
                    >
                        <img
                            className={"img-banner img-fluid"}
                            src="assets/img/homme_presentation.png"
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Presentation;
