const express = require('express');
const router = express.Router();
const cors = require('cors')
const nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({


    service: 'gmail',
    auth: {
        user: 'lvivneofoto@gmail.com',
        pass: '1q2w3e!Q@W#E'
    }
  });

router.use(cors())

router.post('/', cors(), function (req, res) {
    console.log(req.body.namePersonEmail)
    transporter.sendMail({
        from: 'lvivneofoto@gmail.com',
        to: `${req.body.namePersonEmail}`,
        subject: 'Повідомлення з neofoto.com.ua',
        text: `Ім'я: ${req.body.namePerson}
        Номер: ${req.body.namePersonPhone}
        Тип фотографії: ${req.body.typeOfPhoto}
        Повідомлення: ${req.body.namePersonMessage}`
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });
})

module.exports = router;