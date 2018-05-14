var Person = function() {
	var name;
	this.getName = function() {
		return name;
	}
	this.setName = function(value) {
		name = value;
	}
}

module.exports = Person;