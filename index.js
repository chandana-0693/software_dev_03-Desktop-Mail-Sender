const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: '' // Your App Password 
    }
  });

  const info = await transporter.sendMail({
    from: '"Email Sender App" <guptaniraj730@gmail.com>',
    to,
    subject,
    text
  });

  return info.messageId;
}

module.exports = { sendEmail };
