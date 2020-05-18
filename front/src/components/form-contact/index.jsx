import React, {Component, useState} from 'react';
const axios = require('axios');

export default function FormContact() {

    const [formValue, setFormValue] = useState({
       name :'',
       zipCode: '',
       email: '',
       phoneNumber: '',
       eventDate: '',
       message: ''
    });

    const resetFormData = () => {
        setFormValue({
            name :'',
            email: '',
            message: '',
            zipCode: '',
            phoneNumber: '',
            eventDate: ''
        })
    };

    const updateFormData = event =>
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    const { name, zipCode, email, phoneNumber, eventDate, message } = formValue;

    const onSubmit = (event) => {
        console.log('onSubmit', event);
        console.log('Name:', name);
        event.preventDefault(); 
        axios.post('http://localhost:3001/form', {
            name,
            zipCode,
            email,
            phoneNumber,
            eventDate,
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
                    <p className="titleFormContact">APPELEZ-NOUS</p>
                <form className="formContact" method="POST">
                    <div className="formFirstPart">
                        <label>Nom :</label>
                        <input
                        className="formContactInput"
                        onChange={e => updateFormData(e)}
                        value={name}
                        type="text"
                        name="name"
                        />

                        <label>Code postale :</label>
                        <input 
                        className="formContactInput" 
                        onChange={e => updateFormData(e)} 
                        value={zipCode} 
                        type="text" 
                        name="zipCode"
                        />

                        <label>Email :</label>
                        <input 
                        className="formContactInput" 
                        onChange={e => updateFormData(e)} 
                        value={email} 
                        type="text" 
                        name="email"
                        />

                        <label>Téléphone :</label>
                        <input 
                        className="formContactInput" 
                        onChange={e => updateFormData(e)} 
                        value={phoneNumber} 
                        type="text" 
                        name="phoneNumber"
                        />

                        <label>Date(s) de l'évènement :</label>
                        <input 
                        className="formContactInput" 
                        onChange={e => updateFormData(e)} 
                        value={eventDate} 
                        type="text" 
                        name="eventDate"
                        />  
                    </div>
                    <div className="formSecondPart">
                        <label>Message :</label>
                        <input 
                        className="formContactInput" 
                        onChange={e => updateFormData(e)} 
                        value={message}
                        type="textarea"
                        name="message"
                        />
                        <button type='submit' onClick={onSubmit}>ENVOYER</button>
                        <div className="line firstLine"></div>
                            <p className="lineText">ELITE ANIMATION</p>
                            <p className="lineText">8 chemin du maouré - 31770 Colomiers</p>
                            <p className="lineText">06 86 58 13 08</p>
                            <p className="lineText">patrick.sufu@sfr.fr</p>
                        <div className="line"></div>
                    </div>
                </form>
                <img src="assets/img/perso_ligne_femme.png" alt='perso_vr' />
            </div>
        )
}
