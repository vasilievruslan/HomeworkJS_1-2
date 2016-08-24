// Part one

// var numbInput = prompt('enter number'),
// 	powInput = prompt('enter power');

// function pow(numbInput, powInput) {
// 	var result = 1;

// 	for (var i = 0; i < powInput; i++) {
// 		result *= numbInput;
// 	}

// 	return result;
// }

// alert(pow(numbInput, powInput));

// Part two

var names = [];
	
for (var i = 0; i <= 4; i++) {
	var enterName = prompt('enter your name');
	names.push(enterName);
}

console.log("arr", names);


var confirmName = prompt('confirm your name')

function checkName(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

if(checkName(names, confirmName) == true){
	alert(confirmName + ', you have successfully logged!');
}
else{
	alert('error');
}


