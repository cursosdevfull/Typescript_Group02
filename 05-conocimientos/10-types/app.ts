enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

type TInput = string | number;

type TResultConversion = "result-number" | "result-string";

function combine(
  input1: TInput,
  input2: TInput,
  gender: GENDER,
  resultConversion: TResultConversion
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

type TUser = {
  name: string;
  age: number;
};

function printUser(user: TUser) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

type TComponent = "HomeComponent" | "AboutComponent" | "ContactComponent";

type ROUTE = {
  path: string;
  component: TComponent;
  callback: (messsage: string) => void;
};

type ROUTES = ROUTE[];

const routes: ROUTES = [
  {
    path: "/",
    component: "HomeComponent",
    callback: (message: string) => {
      console.log("message Home", message);
    },
  },
  {
    path: "/about",
    component: "AboutComponent",
    callback: (message: string) => {
      console.log("message About", message);
    },
  },
];

function createRoute(route: ROUTE) {
  console.log(`Path: ${route.path}, Component: ${route.component}`);
  route.callback("Hola Mundo");
}

for (const route of routes) {
  createRoute(route);
}
