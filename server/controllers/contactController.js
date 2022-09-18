const router = require('express').Router();
const { OK, NOT_FOUND } = require('http-status-codes');
const nodemailer = require('nodemailer');
const db = require('../db');

router.post('/', async (req, res) => {
    const { email, comment } = req.body;
    // Check we have an email and comment!
    if (email == null || comment == null)
        return res.status(NOT_FOUND).json({ message: '404: Bad Request' });

    // Send an email to me!!
    const emailSender = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: false,
        service: 'yahoo',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        logger: true,
    });

    const emailSubject = 'New Contact Email!';
    const emailText = `A new contact is trying to reach you!\nEMAIL: ${email}\nCOMMENT: ${comment}`;

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_TO,
        subject: emailSubject,
        text: emailText,
    };

    emailSender.sendMail(mailOptions, function (err, _) {
        if (err) {
            console.log(err);
            res.status(NOT_FOUND).json({
                message:
                    'There was an error with your request. Please try sending it again later.',
            });
        } else {
            res.status(OK).json({
                message: 'Your message has been sent. Thank you!',
            });
        }
    });
});

module.exports = router;
