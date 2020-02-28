import React from 'react';

export const CardProduct = (props) => {
    console.log('Card product');
    //console.log(props.products);
    return (
        props.products.map((product, index) => {
            return (
                <div className="cardContainer" key={index}>
                    <div className="topCard">
                        <span className="cardTitle">{product.name}</span>
                    </div>
                    <div className="bottomCard">
                        <img src="assets/img/vignettesGames/Fly_Simulator.jpg" alt="Fly Simulator" />
                    </div>
                </div>
            )
        })
    )
};
