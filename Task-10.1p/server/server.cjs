require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '//for security reasons, this is not the actual key'
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body; // Only getting email from the request body

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

   mg.messages.create('sandbox6747d5db886d42209491f3b6b0888b5f.mailgun.org', {
            from: 'DEV@Deakin <fudffkj@gmail.com>',
            to: email,
        subject: 'Welcome to DEV@Deakin!',
        text: `Hi ,\n\nThank you for signing up for DEV@Deakin!\n\nBest regards,\nDEV@Deakin Dennis Yu`,
        html: `<h1>Welcome to DEV@Deakin!</h1><p>Hi ,</p><p>Thank you for signing up for DEV@Deakin! </p><p>Best regards,<br>DEV@Deakin Dennis Yu</p>`
    })
        .then(msg => {
            console.log('Email sent:', msg);
            res.status(200).json({
                message: 'Welcome email sent successfully!'
            });
        })
        .catch(err => {
            console.error('Error sending email:', err);
            res.status(500).json({
                error: 'Failed to send welcome email'
            });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
