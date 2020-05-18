import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return(
            <div id="footer">
               <p>ENVIE DE PLUS DE JEUX ?</p>
               <p>DECOUVREZ NOS JEUX GONFLABLES !</p>
               <p>RENDEZ-VOUS SUR</p>
                <p><a href="https://www.eliteanimation.com/" target="_blank">www.eliteanimation.com</a></p>
                <img
                    className={"imgHomeBottom"}
                    src="assets/img/img_footer.png"
                />
            </div>
        )
    }
}

export default Footer;
