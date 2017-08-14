var amqp = require('amqplib/callback_api');

var username = "admin";
var password = "admin";
var server = "localhost";
var port = "15672";
var vhost = "canalAtende";

var URI_RABBIT = "amqp://" + username + ":" + password + "@" + server + ":" + port + "/" + vhost + "?heartbeat=60"
var exChangeName = 'canalAtende';
var typeQueue = 'fanout'
var Options = {durable: true}
var message = 'Hello assertExchange!';


amqp.connect( URI_RABBIT, function(err, connection) {
	 if(connection){
		 console.error('Error connection AMQP', err.message);
		return; 
   }
   
  connection.createChannel(function(err, channel) { 
    channel.assertExchange(exChangeName, typeQueue, Options);
    channel.publish(exChangeName, '', new Buffer(message));
    console.log("Send Message: %s", message);
  });

  setTimeout(function() { connection.close(); process.exit(0) }, 500);
}); 