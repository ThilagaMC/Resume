// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { userName, email, subject, message } = req.body;

    // Validate input
    if (!userName || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to yourself (original functionality)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // or your personal email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${userName}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Acknowledgment email to the user (new functionality)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us on - ${subject}`,
      text: `
        Dear ${userName},
        
        Thank you for reaching out. We have received your message and will get back to you shortly.
        
        Here's a copy of your message for your reference:
        Subject: ${subject}
        Message: ${message}
        
        Best regards,
        Thilagavathi MC
        +91 9381659870
      `,
      html: `
        <h2>Thank you for contacting us, ${userName}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        
        <h3>Your message details:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        
        <p>Best regards,<br/>Thilagavathi <br/>+91 9381659870</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    
    res.status(200).json({ message: 'Message sent successfully! Please check your email for confirmation.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error sending message. Please try again.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});