const mc = require('./cronOptions/messages-cron');

mc.sendMessageInThisTime('*/2 * * * *',{
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'noreplyalitec@gmail.com',
        pass: 'essaeumagrandesenha'
    }
  },{
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'mykernel25@gmail.com, fredson.rodrigues.principal@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
  });
