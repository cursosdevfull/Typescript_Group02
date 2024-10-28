function sum(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
): number {
  /*   if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Incorrect input");
  } */

  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    console.log(result);
  }

  console.log("type of result", typeof result);
  return result;
}

function substrat(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
): number {
  /*   if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Incorrect input");
    } */

  const result = num1 - num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    console.log(result);
  }

  console.log("type of result", typeof result);
  return result;
}

const number1 = 20;
const number2 = 10;
const printResult = true;
const resultPhrase = "Result is: ";

sum(number1, number2, printResult, resultPhrase);
substrat(number1, number2, printResult, resultPhrase);

const resultDate = new Date();
console.log("date in isoString", resultDate.toISOString());
