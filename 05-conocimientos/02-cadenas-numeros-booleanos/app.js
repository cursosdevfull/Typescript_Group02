function sum(num1, num2, showResult, phrase) {
    /*   if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Incorrect input");
    } */
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(result);
    }
    console.log("type of result", typeof result);
    return result;
}
function substrat(num1, num2, showResult, phrase) {
    /*   if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Incorrect input");
      } */
    var result = num1 - num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(result);
    }
    console.log("type of result", typeof result);
    return result;
}
var number1 = 20;
var number2 = 10;
var printResult = true;
var resultPhrase = "Result is: ";
sum(number1, number2, printResult, resultPhrase);
substrat(number1, number2, printResult, resultPhrase);
