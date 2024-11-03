type IError2 = {
  [key: string]: string | number;
};

const error01: IError = {
  message: "An error occurred!",
  code: 500,
};

const error02: IError = {
  stack: "An error occurred at line 86!",
};

const environment1: string = "prd";

if (environment === "prd") {
  console.log({ ...error1, ...error2 });
} else {
  console.log(error1);
}
