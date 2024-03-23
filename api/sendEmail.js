import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  // Set SendGrid API key
  sgMail.setApiKey('your_sendgrid_api_key');

  const msg = {
    to: 'recipient@example.com',
    from: email,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email using SendGrid API
    await sgMail.send(msg);

    console.log('Email sent successfully!');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error });
  }
}
