const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'muhajirah1204@gmail.com',
    pass: 'app-password' // Ganti dengan App Password
  },
  tls: {
    minVersion: 'TLSv1.2',
    ciphers: 'HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA'
  }
});

const mailOptions = {
  from: '"Muhajirah" <muhajirah1204@gmail.com>',
  to: 'recipient@gmail.com', // Ganti dengan email valid
  subject: 'Test Email',
  text: 'Ini adalah email percobaan.'
};

transporter.sendMail(mailOptions)
  .then(info => console.log('Email terkirim:', info.response))
  .catch(error => console.error('Error:', error.message));