export type TMessage = {
  name: string;
  text: string;
  email?: string;
  phone?: string;
};

export abstract class Notification {
  message!: TMessage;
  abstract send(): void;
}

export class NotificationBase extends Notification {
  constructor(message: TMessage) {
    super();
    this.message = message;
  }

  send(): void {
    console.log("Sending notification", this.message);
  }
}

export class NotificationBySMS extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send() {
    this.notification.send();
    console.log("Sending SMS notification", this.message);
  }
}

export class NotificationByEmail extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send() {
    this.notification.send();
    console.log("Sending Email notification", this.message);
  }
}

export class NotificationByPush extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send() {
    this.notification.send();
    console.log("Sending Push notification", this.message);
  }
}
