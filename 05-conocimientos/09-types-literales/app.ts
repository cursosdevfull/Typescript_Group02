enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

function combine(
  input1: string | number,
  input2: string | number,
  gender: GENDER,
  resultConversion: "result-number" | "result-string"
) {
  if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "result-string"
  ) {
    return input1 + " " + input2;
  } else if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "result-number"
  ) {
    return input1 + input2;
  }
}

const combineNames = combine("Max", "Anna", GENDER.MALE, "result-string");
console.log(combineNames);

const combineAges = combine(30, 26, GENDER.FEMALE, "result-number");
console.log(combineAges);
