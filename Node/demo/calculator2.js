// private function
var printToConsole = function(result) {
	console.log('Result is ' + result);
}

module.exports.addition = function(x, y) {
	var z = x + y;
	printToConsole(z);
	return z;
}

module.exports.subtraction = function(x, y) {
	return x - y;
}