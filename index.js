let number1 = Number(prompt("What's the first number?"))
let operation = prompt("What's the operation you wanna do?")
let number2 = Number(prompt("what's the sencond number?"))

if (operation === "+"){
	sum (number1, number2)
	}
else if (operation === "-"){
	takeAway(number1, number2)

	}
else if (operation === "*") {
	multiplication (number1, number2)
	}
else if (operation === "/"){
	divide(number1, number2)
  }
else {console.log("You did type an incorrect operator. Please, try again")}
	

function sum(n,m){
	console.log(n + m)
	}
function takeAway(n,m){
	console.log(n - m)
	}
function divide(n,m){
	console.log(n / m)
  }
function multiplication(n,m){
	console.log(n * m)
	}