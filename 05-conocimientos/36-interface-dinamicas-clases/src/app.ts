interface Routes {
  [key: string]: new (...args: any[]) => { title: string; type: string };
}

class HomeControlller {
  title: string = "Home";
  type: string = "Cntrol component";

  constructor() {
    this.title = "Home";
    this.type = "Control component";
  }
}

class AboutController {
  title: string = "Home";
  type: string = "control";

  constructor() {
    this.title = "Home";
    this.type = "Control component";
  }
}

class ContactController {
  title: string = "Home";
  type: string = "control";

  constructor() {
    this.title = "Contact";
    this.type = "Control component";
  }
}

const routes: Routes = {
  "/": HomeControlller,
  "/about": AboutController,
  "/contact": ContactController,
};

function render(route: string) {
  const controller = new routes[route]();
  console.log("controller", controller);
}

render("/about");
