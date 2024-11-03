interface IError {
  [key: string]: string | number;
}

const error1: IError = {
  message: "An error occurred!",
  code: 500,
};

const error2: IError = {
  stack: "An error occurred at line 86!",
};

const environment: string = "prd";

if (environment === "dev") {
  console.log({ ...error1, ...error2 });
} else {
  console.log(error1);
}
