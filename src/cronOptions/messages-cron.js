var cron = require('node-cron');
const mailer = require('../mailerOptions/mailer');
module.exports = {
    sendMessageInThisTime: function(crontime, configuration, mailConfiguration){
        cron.schedule('*/2 * * * *', function(){
            console.log('running every minute to 1 from 5');
            mailer.sendTheMessage(configuration,mailConfiguration);
        });
    }
}