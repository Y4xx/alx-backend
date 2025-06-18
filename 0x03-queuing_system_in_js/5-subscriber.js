import { createClient } from 'redis';

const redisClient = createClient();

//connect to redis server
redisClient.on('connect', function () {
    console.log('Redis client connected to the server');
});

redisClient.on('error', function (error) {
    console.log(`Redis client not connected to the server: ${error.message}`);
});

//subscribe to ALX school channel
redisClient.subscribe('ALX school channel');

//listen for messages on channel and print message when received
redisClient.on('message', function (channel, message) {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
//unsubscribe from channel and cancel server connection
    redisClient.unsubscribe('ALX school channel');
    redisClient.end(true);
  }
});
