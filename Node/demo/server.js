var Addition = require('./addition.js');
var Calc1 = require('./calculator1.js');
var { add, mul } = require('./calculator1.js');
var Calc2 = require('./calculator2.js');
var { subtraction } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');


console.log('Welcome to Demo');
console.log(' Add of 1 and 2 is ' + Addition(1, 2));
// Calc1.add is not preferable 
console.log(' Add of 2 and 4 is ' + Calc1.add(2, 4));
console.log(' Add of 2 and 4 is ' + add(2, 4));
console.log(' Add of 2 and 4 is ' + mul(2, 4));
// Calc2.subtraction is not preferable 
console.log(' Subtraction of 2 and 4 is ' + Calc2.subtraction(2, 4));
console.log(' Subtraction of 2 and 6 is ' + subtraction(2, 6));

var p = new Person();
p.setName('Kaveri');

console.log(p.getName() + ' is from Hyderabad');

var s = new Son();
console.log(s.getName() + ', ' + s.getAge() + ', ' + s.getCity());

/*
http.createServer((req, res) => {
	console.log(' Webpage Requested');
	res.end(' Welcome to Demo');
}).listen(4000);*/

http.createServer((req, res) => {
	fs.readFile('Page/Test3.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3002);
