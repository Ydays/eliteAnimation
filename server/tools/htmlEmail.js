const htmlEmail = ({...mailOptions}) => {
    return `
            <h3>Prise de contact</h3>
            <p>Nom : ${mailOptions.name}</p>
            <p>Email : ${mailOptions.email}</p>
            <p>Téléphone : ${mailOptions.phoneNumber}</p>
            <p>Date de l'évènement : ${mailOptions.eventDate}</p>
            <p>Code postal : ${mailOptions.zipCode}</p>
            <p>Message : ${mailOptions.message}</p>
        `
};

module.exports= {
    htmlEmail
};
