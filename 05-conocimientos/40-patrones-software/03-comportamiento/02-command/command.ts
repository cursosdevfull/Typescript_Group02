type TPayload<T> = {
  payload: T;
};

export enum QueueEnum {
  ADD_ORDER = "ADD_ORDER",
  ANNUEL_ORDER = "ANNUEL_ORDER",
}

export type TOrder = {
  orderId: number;
  customerId: number;
  products: string[];
};

export type TAnnuelOrder = {
  orderId: number;
  customerId: number;
};

export abstract class Command<T> {
  protected payload!: TPayload<T>;
  protected queue!: QueueEnum;
  abstract execute(): void;
}

export class AddOrderCommand<T> extends Command<T> {
  constructor(payload: TPayload<T>) {
    super();
    this.payload = payload;
    this.queue = QueueEnum.ADD_ORDER;
  }

  execute() {
    console.log(`Order added: ${JSON.stringify(this.payload.payload)}`);
  }
}

export class AnnuelOrderCommand<T> extends Command<T> {
  constructor(payload: TPayload<T>) {
    super();
    this.payload = payload;
    this.queue = QueueEnum.ANNUEL_ORDER;
  }

  execute() {
    console.log(`Order annuel: ${JSON.stringify(this.payload.payload)}`);
  }
}
