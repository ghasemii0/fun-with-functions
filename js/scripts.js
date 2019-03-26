var userInput = prompt("Tell us something interesting:");

var input = function(userInput) {
  var firstLetter = userInput.charAt(0).toUpperCase();
  var lastLetter = userInput.charAt(userInput.length -1).toUpperCase();
  return firstLetter + lastLetter;
};
var resultOne = input(userInput);

var reverse = function(resultOne) {
  return resultOne.split("").reverse().join("");
}

var resultTwo = reverse(resultOne);

var thirdFunction = function(resultOne,resultTwo){
  var concat = userInput.concat(resultTwo);
  alert(concat);
}

var forthFunction = function(userInput){
  //var roundDownn = Math.floor(n);
  alert (userInput.slice);
  //var half = roundDownn.charAt(roundDownn.length -1);
  //alert(roundDownn);
};
forthFunction(userInput);
//thirdFunction(resultOne,resultTwo);
