import React from 'react';

export const CardProduct = (props) => {
    console.log('Card product');
    //console.log(props.products);

    const handleClick = (index) => {
        //console.log(index);
    };

    return (
        props.products.map((product, index) => {
            return (
                <div className="cardContainer" onClick={() => handleClick(index)} id={index}  key={index}>
                    <div className="topCard">
                        <p className="cardTitle">{product.name}</p>
                    </div>
                        <img src={product.imageURL} alt="Fly Simulator" />
                </div>
            )
        })
    )
};
