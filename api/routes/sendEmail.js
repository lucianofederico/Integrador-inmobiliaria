const nodemailer = require ("nodemailer");
const express = require('express');

const routerEmail = express.Router();

routerEmail.post ("/send-email", (req,res) => {
    const {name, email, message} = req.body
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
         auth: {
            user: "	tuinmobiliaria.bsas@gmail.com",
            pass: "dytdlnppmkaskiqk"
         }
})
    var mailOptions = {
        from: '"Tu inmo" <tuinbomiliaria@gmail.com>',
        to: email,
        subject: "Recibimos tu mensaje",
        text: 'Hola ' + name + ',\n\n Gracias por tu mensaje, pronto nos pondremos en contacto contigo. El mensaje decia: ' + message , 
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        }else {
            console.log("Email enviado.");
            res.status(200).jsonp(req.body)
        }
    })
})

module.exports = routerEmail;