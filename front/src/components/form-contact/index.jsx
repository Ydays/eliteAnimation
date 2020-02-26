import React, {Component, useState} from 'react';
const axios = require('axios');

export default function FormContact() {

    const [formValue, setFormValue] = useState({
       name :'',
       email: '',
       message: ''
    });

    const resetFormData = () => {
        setFormValue({
            name :'',
            email: '',
            message: ''
        })
    };

    const updateFormData = event =>
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    const { name, email, message } = formValue;

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/', {
            name,
            email,
            message
        }).then(function (response) {
            console.log('Request done for sending mail', response);
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
        resetFormData();
        alert('Email envoyé !');
    };


        return (
            <div id="contact" className="formContactGlobal">

                    <p>APPELEZ-NOUS</p>


                <div className="formContact">
                    <div className="formFirstPart">
                        <label>Nom :</label>
                        <input className="formContactInput" type="text" name="lastName"/>

                        <label>Code postale :</label>
                        <input className="formContactInput" type="text" name="zipCode"/>

                        <label>Email :</label>
                        <input className="formContactInput" type="text" name="email"/>

                        <label>Téléphone :</label>
                        <input className="formContactInput" type="text" name="phoneNumber"/>

                        <label>Date(s) de l'évènement :</label>
                        <input className="formContactInput" type="text" name="eventDate"/>
                    </div>
                    <div className="formSecondPart">
                        <label>Message :</label>
                        <input className="formContactInput" type="textarea" name="message"/>
                        <button type='submit'>ENVOYER</button>

                    </div>
                </div>
                <img src="assets/img/perso_ligne_femme.png" alt='perso_vr' />
            </div>
        )
}
