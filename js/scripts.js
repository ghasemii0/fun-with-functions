var userInput = prompt("Tell us something interesting:");

var input = function(userInput) {
  var firstLetter = userInput.charAt(0).toUpperCase();
  var lastLetter = userInput.charAt(userInput.length -1).toUpperCase();
  return firstLetter + lastLetter;
};
var resultOne = input(userInput);
//alert(resultOne);
//var firstFunctionResult = input();

// alert(firstFunctionResult());

var reverse = function(resultOne) {
  return resultOne.split("").reverse().join("");
}

var resultTwo = reverse(resultOne);
//alert(resultTwo);

var thirdFunction = function(resultOne,resultTwo){
  alert(resultOne);
  alert(resultTwo);
}
thirdFunction(resultOne,resultTwo);





//
// var thirdFunction = function(input, inverse){
//   alert(input(firstLetter, lastLetter));
//   alert(inverse(lastLetter, firstLetter));
// }
//
// var functionThree(aThing) {
//   var result = input(aThing);
//   inverse(result)
// }

//var userInput = prompt("Tell us something interesting:");
//alert(input(userInput));

//thirdFunction(firstLetter, lastLetter);

//functionThree(userInput);

//functions are values
