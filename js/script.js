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

function checkNames(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

var confirmName = prompt('Confirm Your Name')

if(checkNames(names, confirmName)){
	alert('success')
} 
else{
	alert('error')
}


