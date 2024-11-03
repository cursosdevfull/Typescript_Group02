interface OperationFn {
  (operator1: number, operator2: number, operationType: string): number;
}

let sum: OperationFn;

sum = (a: number, b: number, operation: string): number => {
  if (operation === "sum") {
    return a + b;
  }

  return a - b;
};

console.log(sum(2, 3, "subtract")); // 5
