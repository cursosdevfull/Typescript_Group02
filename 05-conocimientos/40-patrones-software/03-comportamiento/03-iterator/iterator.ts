export type TIterator<T> = {
  next(): T;
  hasNext(): boolean;
};

export type TTopic = "LOAD_INDIVIDUAL" | "LOAD_GROUP";
export type TPayload = { campaing: string };

export type Aggregator<T> = {
  createIterator(): TIterator<T>;
};

export class ImplementIterator implements TIterator<Notification> {
  currentPosition = 0;
  totalNotifications: number;

  constructor(private readonly notifications: Map<number, Notification>) {
    this.totalNotifications = notifications.size;
  }

  next(): Notification {
    return this.notifications.get(this.currentPosition++)!;
  }

  hasNext(): boolean {
    return this.currentPosition < this.totalNotifications;
  }
}

export class Notification {
  constructor(private readonly topic: TTopic, payload: TPayload) {}
}

export class NotificationsPending implements Aggregator<Notification> {
  private notifications: Map<number, Notification> = new Map();

  add(notification: Notification) {
    const size = this.notifications.size;
    this.notifications.set(size + 1, notification);
  }

  createIterator(): TIterator<Notification> {
    return new ImplementIterator(this.notifications);
  }
}
