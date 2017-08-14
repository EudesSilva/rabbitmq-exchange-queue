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


amqp.connect( URI_RABBIT, function(err, connection) {
  connection.createChannel(function(err, channel) {

    channel.assertExchange(exChangeName, typeQueue, Options);

    channel.assertQueue('', {exclusive: true}, function(err, q) {
      console.log("Wait messages in %s", q.queue);
      channel.bindQueue(q.queue, exChangeName, '');

      channel.consume(q.queue, function(msg) {
        console.log("receive: %s", msg.content.toString());
      }, {noAck: true});
    });
  });
});