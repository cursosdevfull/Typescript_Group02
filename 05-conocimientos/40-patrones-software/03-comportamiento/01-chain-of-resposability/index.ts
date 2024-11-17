import {
  Authentication,
  Authorization,
  Controller,
  TRequest,
  Validation,
} from "./chain-of-responsability";

const request: TRequest = {
  params: {
    id: 34,
  },
  header: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    roles: ["admin"],
  },
};

const authentication = new Authentication(request);
const authorization = new Authorization(request);
const validation = new Validation(request);
const controller = new Controller(request);

authentication.setHandler(authorization);
authorization.setHandler(validation);
validation.setHandler(controller);

authentication.execute();
