var NITUIFramework = {
	version: 1.0,
	createElement: function(type, attributes){
		if(type == 'label') {
			return this.createLabel(attributes.text);
		} else if(type == 'text') {
			return this.createTextBox();
		} else if(type == 'button') {
			return this.createButton(attributes.text);
		}
	},
	createLabel: function(text){
		var newlabel = document.createElement("Label");
		newlabel.innerHTML = text;
		return newlabel;
	},
	createTextBox: function(){
		var newTextBox = document.createElement("input");
		newTextBox.setAttribute('type', 'text');
		
		return newTextBox;
	},
	createButton: function(text){
		var button = document.createElement("input");
		button.setAttribute('type', 'button');
		button.setAttribute('value', text);

		return button;
	}
}