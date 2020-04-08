require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const { htmlEmail } = require('./tools/htmlEmail');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.post('/form', (req, res) => {
    console.log(req.body);
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_GMAIL,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ADRESS,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.MAIL_ADRESS,
            to: process.env.MAIL_ADRESS,
            subject: 'Prise de contact',
            text: req.body.message,
            html: htmlEmail(req.body)
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return console.log(err);
            else res.send("----- Email Send ! -------");
        })
    })
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});
