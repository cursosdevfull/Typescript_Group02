export abstract class Suscriptor {
  abstract notify(status: boolean): void;
}

export class Subject {
  private suscriptors: Suscriptor[] = [];

  register(suscriptor: Suscriptor) {
    this.suscriptors.push(suscriptor);
  }

  unregister(suscriptor: Suscriptor) {
    this.suscriptors = this.suscriptors.filter((obs) => obs !== suscriptor);
  }

  notify(status: boolean) {
    this.suscriptors.forEach((suscriptor) => suscriptor.notify(status));
  }
}

export class Layout {
  constructor(private readonly subject: Subject) {}

  onChangeStatus(status: boolean) {
    this.subject.notify(status);
  }
}

export class MenuComponent extends Suscriptor {
    notify(status: boolean) {
        console.log(`MenuComponent: ${status ? 'visible' : 'hidden'}`);
    }
}

export class HeaderComponent extends Suscriptor {
    notify(status: boolean) {
        console.log(`HeaderComponent: ${status ? 'visible' : 'hidden'}`);
    }
}
