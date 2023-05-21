/*======================CHAPTER # 1===========================*/
var userInput=prompt("Write any thing")
var allLower = userInput.toLowerCase();
var x = "SzhghgcgSGDGGg"
b = x.toLowerCase();
var y ="jgugvhgvhggh"
z = y.toUpperCase();
var lowercaseString = originalString.toLowerCase();
var lowercaseElement = arrayElement.toLowerCase();
alert(myString.toUpperCase());
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


let sameWords = "captain";
sameWords = sameWords.slice(0, 1) + sameWords.slice(3);
let str = "Hello, World!";
let length = str.length;
let animal = "elephant";
let seg = animal.slice(2, 6);
let numChars = str.length;
let slicedStr = str.slice(1, numChars - 3);
let text = "Let it go, let it go!";
let indx = text.lastIndexOf("go");
let randomNumber = Math.floor(Math.random() * 50) + 1;
let randomNum = Math.random();
let diceNumber = Math.floor(Math.random() * 6) + 1;
let tossResult = Math.random() < 0.5 ? 'head' : 'tail';
function convertStringToInteger() {
    let str = "123";
    let integer = parseInt(str);
  
    return integer;
  }
  
  let result = convertStringToInteger();
  console.log(result); 
  function convertStringToInteger() {
    let str = "123";
    let integer = parseInt(str);
  
    return integer;
  }
  
  let resul = convertStringToInteger();
  console.log(resul); 
  let strg = "3.14";
let floatNumber = parseFloat(strg);
console.log(floatNumber); // Output: 3.14
let stri = "123";
let isConvertibleToNumber = !isNaN(stri);
console.log(isConvertibleToNumber); // Output: true
let number = 42;
let strn = number.toString();
console.log(strn); // Output: "42"
function convertNumberToString() {
    let number = 42;
    let str = number.toString();
  
    return str;
  }
  
  let resultt = convertNumberToString();
  console.log(resultt); // Output: "42"
  let num = 3.141592653589793;
let newNum = num.toFixed(4).toString();
console.log(newNum); // Output: "3.1416"
let numb = 2.718281828459045;
num = parseFloat(numb.toFixed(2).toString());
console.log(numb); // Output: 2.72
if (num.toFixed(2).toString().length > 4) {
    // Code to be executed if the condition is true
    console.log("Number has more than 4 characters");
  } else {
    // Code to be executed if the condition is false
    console.log("Number has 4 or fewer characters");
  }
  if (num.toFixed(2).toString().length > 4) {
    // Code to be executed if the condition is true
    console.log("Number has more than 4 characters");
  } else {
    // Code to be executed if the condition is false
    console.log("Number has 4 or fewer characters");
  }
  let dObj = new Date();
  let dStr = new Date().toString();
  let d = new Date();
let day = d.getDay();
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = dayNames[d.getDay()];
alert(currentDay);
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let days = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
let later = new Date(2020, 11, 31);
let myDate = new Date(1992, 1, 2);
let referenceDate = new Date(1980, 0, 1);
let millisecondsElapsed = new Date().getTime() - referenceDate.getTime();
alert(millisecondsElapsed);
let dates = new Date();
date.setFullYear(2022);
let date = new Date();
date.setMonth(0); // January is represented by 0
function changeMinutesToSpecificValue() {
    let time = new Date(); // Current time
    let specificMinutes = prompt("Enter the specific minutes value:");
    time.setMinutes(specificMinutes);
    return time;
  }
  function displayAlert() {
    // Code for displaying an alert goes here
  }
  function displayAlert() {
    // Code for displaying an alert goes here
  }
  function askName() {
    let userName = prompt("Enter name");
    // Rest of the function code goes here
  }
  function callTwoFunctions() {
    function1();
    function2();
    // Rest of the function code goes here
  }
  function getNameAndDisplayAlert() {
    let name = prompt("Enter name");
    alert("Your name is: " + name);
    // Rest of the function code goes here
  }
  
  getNameAndDisplayAlert(); // Call the function
  function concat(a, b, c) {
    // Rest of the function code goes here
  }
  
  concat("a", "b", "c"); // Call the function with arguments
  function concatenateAndAssign(parameter1, parameter2) {
    let result = parameter1 + parameter2;
    // Rest of the function code goes here
  }
  function multiplyThreeParameters(a, b, c) {
    let result = a * b * c;
    // Rest of the function code goes here
  }
  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
  }
  function calculateSum(a, b) {
    let sum = a + b;
    return sum;
  }
  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
  }
  let results = calculateSum(5, 7); // Assuming `calculateSum` is a function returning the sum of two numbers
  function countLetters(word) {
    return word.length;
  }
  function set(year){
    var datess = new getFullYear(year)
    return datess;
  }
  function localVariableDemo() {
    let localVariable = "This is a local variable.";
    console.log(localVariable);
  }
  
  localVariableDemo(); // Calling the function will print "This is a local variable."
  let globalVariable = "This is a global variable.";

function accessGlobalVariable() {
  console.log(globalVariable);
}

accessGlobalVariable(); // Calling the function will print "This is a global variable."
let variable = "case2";

switch (variable) {
  case "case1":
    console.log("Action for case 1");
    break;
  case "case2":
    console.log("Action for case 2");
    break;
  case "case3":
    console.log("Action for case 3");
    break;
  default:
    console.log("Default action");
    break;
}

let cityNames = prompt("Enter a city name:");

switch (cityNames) {
  case "London":
    alert("You entered London.");
    break;
  case "Paris":
    alert("You entered Paris.");
    break;
  case "New York":
    alert("You entered New York.");
    break;
  default:
    alert("City not recognized.");
    break;
}

  