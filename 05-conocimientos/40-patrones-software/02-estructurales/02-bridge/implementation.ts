import { QueueAbstract, TQueue } from "./abstract";

export class Kafka implements TQueue {
  sent(message: string): Promise<boolean> {
    console.log(`Message sent to Kafka: ${message}`);
    return Promise.resolve(true);
  }
}

export class RabbitMQ implements TQueue {
  sent(message: string): Promise<boolean> {
    console.log(`Message sent to RabbitMQ: ${message}`);
    return Promise.resolve(true);
  }
}

export class NotificationNewCampaign extends QueueAbstract {
  constructor(queue: TQueue) {
    super(queue);
  }

  sentMessage(message: string): Promise<boolean> {
    return this.queue.sent(message);
  }
}

export class NotificationUpdateCampaign extends QueueAbstract {
  constructor(queue: TQueue) {
    super(queue);
  }

  sentMessage(message: string): Promise<boolean> {
    return this.queue.sent(message);
  }
}
