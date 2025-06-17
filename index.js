const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'guptaniraj730@gmail.com',
      pass: 'gtde jzhr zegk pbve' // Your App Password (looks okay)
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