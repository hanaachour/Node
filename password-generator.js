var generator = require('generate-password');

var password = generator.generate( {
	length: 10,
	uppercase: false,
    numbers: true
});


console.log(password);