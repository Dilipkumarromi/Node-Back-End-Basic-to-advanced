const nodemailer = require('nodemailer');
 
exports.Email=(toEmail, name, isVisitMessage ,token)=> {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.SMTP_FROM,
        to: toEmail,
        subject: `${name},${isVisitMessage}`,
        text: '${email} verification by megamock',
        html: `Dear ${name} `
    };
    
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    })
}