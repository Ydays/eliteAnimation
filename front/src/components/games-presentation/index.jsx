import React, { Component } from 'react';
import { Products } from "../../data/products";
import { CardProduct } from '../card';
import { Slider } from './../slider';

class GamesPresentation extends Component {

    render() {
        return (
            <div id='vr-games' className='vrGameContainer'>
                <div className="sliderContainer">
                    <Slider Products={Products} />
                </div>     
              <div className="dumbDiv">
                <img src="assets/img/homme_ligne_games_presentation.png" alt='homme_vr' />
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
