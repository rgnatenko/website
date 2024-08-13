// lib/mail.ts
import nodemailer from 'nodemailer';

const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NEXT_USER,
        pass: process.env.NEXT_PASSWORD
    },
    tls: { rejectUnauthorized: false },
}, {
    from: `CHISTO.COM.UA <${process.env.NEXT_USER}>`,
});

const sendEmail = async (message: any) => {
    try {
        await smtpTransport.sendMail(message);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export default sendEmail;
