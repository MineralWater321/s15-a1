//2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
console.log("Hello World")

/*
3. Prompt the user for 2 numbers and perform different arithmetic operations based on the total of the two numbers:
- Less than 10, add the numbers
- 10 - 20, subtract the numbers
- 21 - 30 multiply the numbers
- Greater than or equal to 30, divide the numbers

4. Use an alert for the total of 10 or greater and a console warning for the total of 9 or less.
*/

let firstNum = parseInt(prompt("Input first Number: "));
let secondNum = parseInt(prompt("Input second Number: "));
sum = firstNum + secondNum;

if(sum < 10){
	console.warn("The sum of the two numbers are: " + sum);
} else if(10 < sum && sum < 20){
	difference = firstNum - secondNum;
	alert("The difference is: " + difference);
} else if(21 < sum && sum < 30){
	product = firstNum * secondNum;
	alert("The product is: " + product);
} else if(sum > 30){
	quotient = firstNum / secondNum;
	alert("The quotient is: " + quotient);
}

/*
5. Prompt the user for their name and age and print out different alert messages based on the user input:
 -  If the name OR age is blank/null, print the message are you a time traveler?
 -  If the name AND age is not blank, print the message with the user’s name and age.
 */

let name = prompt("What is your name?");
let age = prompt("What is your age?");

if(name == false || age == false){
	alert("Are you a time traveler?");
} else {
	alert("You are " + name + " and you are " + age + " years old.");
}

/*6. Create a function named isLegalAge which will check if the user's input from the previous prompt is of legal age:
 - 18 or greater, print an alert message saying You are of legal age.
 - 17 or less, print an alert message saying You are not allowed here.
*/

function isLegalAge(age){
	if(age <= 17){
		return "You are not allowed here."
	} else if (age >= 18){
		return "You are of legal age."
	}
}

message = isLegalAge(age);
alert(message);

/*
7. Create a switch case statement that will check if the user's age input is within a certain set of expected input:
 - 18 - print the message You are now allowed to party.
 - 21 - print the message You are now part of the adult society.
 - 65 - print the message We thank you for your contribution to society.
 - Any other value - print the message Are you sure you're not an alien?
*/

switch(age) {
	case 18:
	alert("You are now allowed to party.");
	case 21:
	alert("You are now part of the adult society.");
	case 65:
	alert("We thank you for your contribution to society.");
	default:
	alert("Are you sure you're not an alien?");
}

/*
8. Create a try catch finally statement to force an error, print the error message as a warning and use the function isLegalAge to print alert another message.
*/

try{
	isLegalAgeee(age);
}
catch (error){
	console.warn(error);
}
finally{
	isLegalAge(age);
}