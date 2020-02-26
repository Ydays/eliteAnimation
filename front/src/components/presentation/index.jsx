import React, { Component } from 'react';


class Presentation extends Component {
    render() {
        return (
            <div
                id="presentation"
                className={"h-100"}
            >
                <div className={"containPresentation h-100"}>
                    <div class="containInfo">
                        <div className={"cardPresentation card1"} data-aos="fade-down">
                            <h2>POURQUOI ?</h2>
                            Pour vos évènements festifs comme des cocktails, mariages,
                            anniversaires, séminaires, festivals, foires, salons, portes
                            ouvertes ...
                        </div>
                        <div className={"cardPresentation card2"} data-aos="fade-down">
                            <h2>POURQUOI NOUS ?</h2>
                            Pour vos évènements festifs comme des cocktails, mariages,
                            anniversaires, séminaires, festivals, foires, salons, portes
                            ouvertes ...
                        </div>
                        <div className={"cardPresentation card3"} data-aos="fade-down">
                            <h2>POUR QUI ?</h2>
                            Pour les comités d'entreprises. les BDE, les centres commerciaux,
                            les structures institutionnelles, les comités des fêtes, les
                            professionnels ...
                        </div>
                        <div className={"cardPresentation card4"} data-aos="fade-down">
                            <h2>NOS ENGAGEMENTS</h2>
                            Pour les comités d'entreprises. les BDE, les centres commerciaux,
                            les structures institutionnelles, les comités des fêtes, les
                            professionnels ...
                        </div>
                    </div>
                        <img
                            className={"imgPresentationBottom"}
                            src="assets/img/homme_presentation.png"
                            data-aos="fade-up"
                        />
                    </div>
            </div>
        )
    }
}

export default Presentation;
