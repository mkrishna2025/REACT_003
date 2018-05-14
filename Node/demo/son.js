class Father {
	getName() {
		return "Venkat";
	}
	getCity() {
		return "Hyderabad";
	}
}

class Son extends Father {
	getName() {
		return "Venkat";
	}
	getAge(){
		return 10;
	}
}


module.exports = Son;