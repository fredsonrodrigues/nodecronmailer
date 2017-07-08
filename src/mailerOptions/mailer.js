const nodemailer = require('nodemailer');

module.exports = {
  sendTheMessage: function(config, mailConfig) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure, // secure:true for port 465, secure:false for port 587
        auth: {
            user: config.auth.user,
            pass: config.auth.pass
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: mailConfig.from, // sender address
        to: mailConfig.to, // list of receivers
        subject: mailConfig.subject, // Subject line
        text: mailConfig.text, // plain text body
        html: mailConfig.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
  },
       
/*  sayHelloInSpanish: function() {
    return "Hola";
  }*/
};