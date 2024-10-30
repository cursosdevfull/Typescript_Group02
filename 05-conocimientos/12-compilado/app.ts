function addUp(a: number, b: number): number {
  return a + b;
}

type TOperation = (a: number, b: number) => number;

let operation: TOperation;

operation = addUp;

console.log(operation(3, 5));
