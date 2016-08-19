// Part one

var numbInput = prompt('enter number'),
	powInput = prompt('enter power');

function pow(numbInput, powInput) {
	var result = 1;

	for (var i = 0; i < powInput; i++) {
		result *= numbInput;
	}

	return result;
}

alert(pow(numbInput, powInput));

// Part two

var names = [];
	
for (var i = 0; i <= 4; i++) {
	var enterName = prompt('enter your name');
	names.push(enterName);
}

console.log("arr", names);

var confirmName = prompt('Confirm Your Name')

for(var x = 0; names[x] == confirmName; x++){
	alert('error');
}

alert(confirmName + ', you have successfully logged!');



