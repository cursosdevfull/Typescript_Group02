type Routes2 = {
  [key: string]: new (...args: any[]) => { title: string; type: string };
};

class HomeControlller2 {
  title: string = "Home";
  type: string = "Cntrol component";

  constructor() {
    this.title = "Home";
    this.type = "Control component";
  }
}

class AboutController2 {
  title: string = "Home";
  type: string = "control";

  constructor() {
    this.title = "Home";
    this.type = "Control component";
  }
}

class ContactController2 {
  title: string = "Home";
  type: string = "control";

  constructor() {
    this.title = "Contact";
    this.type = "Control component";
  }
}

const routes2: Routes2 = {
  "/": HomeControlller2,
  "/about": AboutController2,
  "/contact": ContactController2,
};

function render2(route: string) {
  const controller = new routes2[route]();
  console.log("controller", controller);
}

render2("/about");
