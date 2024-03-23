import nodemailer from 'nodemailer';

export default async function handler(req, res) {
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

    console.log('Email sent successfully!');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.log("fuck you");
    console.error('Error sending email:', error.message);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
