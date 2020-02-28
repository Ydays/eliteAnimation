import React, { Component } from 'react';
import { Products } from "../../data/products";
import { CardProduct } from '../card';

class GamesPresentation extends Component {

    render() {
        return (
            <div id='presentation' className='vrGameContainer'>
              <div className="dumbDiv">
              </div>
                <div className="content">
                    <p className='presentationTitle'>LES JEUX VR</p>
                    <div className="productContainer">
                        <CardProduct products={Products} />
                    </div>
                </div>
            </div>
        )
    }
}

export default GamesPresentation;
