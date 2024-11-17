export type Actions = {
  sent(to: string, payload: Record<string, any>): void;
  receive(from: string, payload: Record<string, any>): void;
};

export class Member implements Actions {
  constructor(private readonly name: string, private mediator: TMediator) {}

  sent(to: string, payload: Record<string, any>): void {
    this.mediator.sent(this.name, to, payload);
  }

  receive(from: string, payload: Record<string, any>): void {
    console.log(`Mensaje recibido de ${from}: ${JSON.stringify(payload)}`);
  }

  getName(): string {
    return this.name;
  }
}

export type TMediator = {
  register(member: Member): void;
  sent(from: string, to: string, payload: Record<string, any>): void;
};

export class Mediator implements TMediator {
  private members: Record<string, Member> = {};

  register(member: Member): void {
    if (!this.members.hasOwnProperty(member.getName())) {
      this.members[member.getName()] = member;
    }
  }
  sent(from: string, to: string, payload: Record<string, any>): void {
    if (this.members.hasOwnProperty(to)) {
      const member: Member = this.members[to];
      member.receive(from, payload);
    }
  }
}
