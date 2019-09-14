const Chuck  = require('chucknorris-io'),
      client = new Chuck();
var dogs = require('dogs');
var asciiCats = require('ascii-cats');
 
// Retrieve a random chuck joke
client.getRandomJoke().then(function (response) {
    // do stuff here
    console.log(response.value)
});

// console.log(dogs.snoopy())
console.log(asciiCats())