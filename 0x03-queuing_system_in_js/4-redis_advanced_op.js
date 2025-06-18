import { createClient, print } from 'redis';

const redisClient = createClient();

redisClient.on('connect', function() {
  console.log('Redis client connected to the server');
});

redisClient.on('error', function(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

//set hash key-value in ALXSchools list
redisClient.hset('ALXSchools', 'Portland', '50', print);
redisClient.hset('ALXSchools', 'Seattle', '80', print);
redisClient.hset('ALXSchools', 'New York', '20', print);
redisClient.hset('ALXSchools', 'Bogota', '20', print);
redisClient.hset('ALXSchools', 'Cali', '40', print);
redisClient.hset('ALXSchools', 'Paris', '2', print);

// retrieve all elements stored in ALXSchools list
redisClient.hgetall('ALXSchools', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
});
