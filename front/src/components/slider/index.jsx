import React from 'react';

export const Slider = (props) => {
    return (
        props.Products.map((product, index) => {
            return (
                <div className="slider" key={index}>
                    <div id='leftArrow' className="arrows prev"></div>
                    <div id='rightArrow' className="arrows next"></div>
                    <div className="sliderImg">
                        <img src={product.imageURL} alt='image' />
                    </div>
                    <div className="sliderDescription">
                        <div className="sliderCross">
                            <div className="cross first"></div>
                            <div className="cross second"></div>
                        </div>
                        <div className="sliderTitle">
                            <h2>{product.name}</h2>
                        </div>
                        <div className="sliderIntro">
                            <p>{product.description}</p>
                        </div>
                        <div className="sliderPrice">
                            <div className="duration">
                                <img src="assets/img/sliderIcons/clock.svg" alt='icon de durée' />
                                <p>{product.duration}mn / partie</p>
                            </div>
                            <div className="price">
                                <img src="assets/img/sliderIcons/clock.svg" alt='icon prix' />
                                <p>{product.price}e / heure</p>
                            </div>
                            <div className="numberOfPlayers">
                                <img src="assets/img/sliderIcons/clock.svg" alt='icon nombre de joueurs' />
                                <p>{product.numberOfPlayers} joueur</p>
                            </div>
                        </div>
                        <div className="sliderButton">
                            <button>DEMANDE UN DEVIS</button>
                        </div>
                    </div>
                </div>
            )
        }) 
    )
};
