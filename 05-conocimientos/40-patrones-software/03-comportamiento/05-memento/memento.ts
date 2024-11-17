export class State {
  constructor(private readonly state: any) {}

  getState(): any {
    return this.state;
  }
}

export class Store {
  private states: State[] = [];

  addState(state: State): void {
    this.states.push(state);
  }

  getState(index: number): State {
    return this.states[index];
  }

  getAllStates(): State[] {
    return this.states;
  }
}

export class ShoppingCart {
  private payload: Record<string, any> = {};

  setState(payload: Record<string, any>): void {
    this.payload = payload;
  }

  restoreState(state: State): void {
    this.payload = state.getState();
  }

  saveState(): State {
    return new State(this.payload);
  }

  showState() {
    return this.payload;
  }
}
