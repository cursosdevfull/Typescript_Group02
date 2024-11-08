export type TQueue = {
  sent(message: string): Promise<boolean>;
};

export abstract class QueueAbstract {
  constructor(protected queue: TQueue) {}
  abstract sentMessage(message: string): Promise<boolean>;
}
