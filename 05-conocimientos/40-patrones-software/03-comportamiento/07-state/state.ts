export class Notification {
  constructor(
    private readonly topic: string,
    private readonly payload: Record<string, any>
  ) {}

  getTopic(): string {
    return this.topic;
  }

  getPayload(): Record<string, any> {
    return this.payload;
  }
}

export abstract class AbstractState {
  abstract handle(notification: Notification): void;
}

export class StateAvailable extends AbstractState {
  handle(notification: Notification): void {
    console.log("Handling notification in available state");
    console.log(
      `Processing notification with topic: ${notification.getTopic()}`
    );
  }
}

export class StateUnavailable extends AbstractState {
  handle(notification: Notification): void {
    console.log("Handling notification in unavailable state");
    console.log(`Ignoring notification with topic: ${notification.getTopic()}`);
  }
}

export class StateBusy extends AbstractState {
  handle(notification: Notification): void {
    console.log("Handling notification in busy state");
    console.log(`Ignoring notification with topic: ${notification.getTopic()}`);
  }
}

export class HandleStates {
  private currentStateProcess: AbstractState = new StateAvailable();

  available() {
    this.currentStateProcess = new StateAvailable();
  }

  unavailable() {
    this.currentStateProcess = new StateUnavailable();
  }

  busy() {
    this.currentStateProcess = new StateBusy();
  }

  handle(notification: Notification) {
    this.currentStateProcess.handle(notification);
  }
}

export class ReadAndProcessNotification {
  handleStates: HandleStates;

  constructor() {
    this.handleStates = new HandleStates();
  }

  handle(notification: Notification) {
    this.handleStates.handle(notification);
  }

  available() {
    this.handleStates.available();
  }

  unavailable() {
    this.handleStates.unavailable();
  }

  busy() {
    this.handleStates.busy();
  }
}
