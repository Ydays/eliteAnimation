import React, { Component } from 'react';
import { Products } from "../../data/products";

class GamesPresentation extends Component {

    renderProductsStickers = () => {
        Products.forEach((product) => {
            return (
                <p>{product.name}</p>
            )
        })
    };

    render() {
        return (
            <div id='presentation' className='vrGameContainer'>
              <div className="dumbDiv">

              </div>
                <div className="content">

                </div>
            </div>
        )
    }
}

export default GamesPresentation;
