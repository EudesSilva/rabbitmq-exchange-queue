![alt text](https://github.com/EudesSilva/rabbitmq-exchange-queue/blob/master/images/AMQP_01.png "RabbitMQ")


# rabbitmq-exchange-queue
Exchanges  In previous parts of the tutorial we sent and received messages to and from a queue. Now it's time to introduce the full messaging model in Rabbit.  Let's quickly go over what we covered in the previous tutorials:      A producer is a user application that sends messages.     A queue is a buffer that stores messages.     A consumer is a user application that receives messages.  The core idea in the messaging model in RabbitMQ is that the producer never sends any messages directly to a queue. Actually, quite often the producer doesn't even know if a message will be delivered to any queue at all.


#Run
```
$ node consumer.js 
```

##### Next
```
$ node producer.js

```

[official site](https://www.rabbitmq.com)

