const tokenValid =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export type TRequest = {
  params: {
    id: any;
  };
  header: {
    token: string;
    roles: string[];
  };
};

export abstract class Handler {
  protected next!: Handler;
  protected request: TRequest;

  constructor(request: TRequest) {
    this.request = request;
  }

  setHandler(next: Handler) {
    this.next = next;
  }

  abstract execute(): void;
}

export class Authentication extends Handler {
  constructor(request: TRequest) {
    super(request);
  }

  execute(): void {
    const token = this.request.header.token;

    if (token === tokenValid) {
      console.log("User authenticated");
      this.next.execute();
    } else {
      console.log("User not authenticated");
    }
  }
}

export class Authorization extends Handler {
  constructor(request: TRequest) {
    super(request);
  }

  execute(): void {
    const roles = this.request.header.roles;

    if (roles.includes("admin")) {
      console.log("User authorized");
      this.next.execute();
    } else {
      console.log("User not authorized");
    }
  }
}

export class Validation extends Handler {
  constructor(request: TRequest) {
    super(request);
  }

  execute(): void {
    const id = this.request.params.id;

    if (!isNaN(id)) {
      console.log("Parameters validated");
      this.next.execute();
    } else {
      console.log("Parameters not validated");
    }
  }
}

export class Controller extends Handler {
  constructor(request: TRequest) {
    super(request);
  }

  execute(): void {
    console.log("Controller executed");
  }
}
