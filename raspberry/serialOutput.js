var request = require('request');

 let opts = {
   'as_user': true,
 };

module.exports = {
   raspberry: (message, web) => {
     message.text = message.text.replace('Pi ', '');
     if(message.text.toLowerCase().includes('motor')) { //object
       if(message.text.toLowerCase().includes('on')) { //action
         request(`http://10.28.6.68:8080/startMotor`);
         web.chat.postMessage(message.channel, 'Lights were turned on', opts);
         return;
       }

       if(message.text.toLowerCase().includes('off')) { //action
         request(`http://10.28.6.68:8080/stopMotor`);
         web.chat.postMessage(message.channel, 'Lights were turned off', opts);
         return;
       }

       web.chat.postMessage(message.channel, 'Please repeat that again and include what you want to do with the lights.', opts);
       return;
     }

     web.chat.postMessage(message.channel, 'Please repeat that again and include what you want to trigger.', opts);
   },
 };
