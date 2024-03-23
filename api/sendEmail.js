const nodemailer = require('nodemailer');

export default async function (req, res) {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'adamyachaturvedi22@gmail.com',
      pass: 'met22met',
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: 'adamyachaturvedi22@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
