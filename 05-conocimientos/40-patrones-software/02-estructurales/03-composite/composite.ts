export type IPrice = { price: number };

export abstract class Component {
  protected _parent!: Component;

  set parent(parent: Component) {
    this._parent = parent;
  }

  get parent() {
    return this._parent;
  }

  add(component: Component): void {}

  remove(component: Component): void {}

  isComposite(): boolean {
    return false;
  }

  abstract getPrice(): number;
}

export class Product extends Component {
  constructor(readonly price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class Box extends Component {
  protected children: Component[] = [];
  price = 0;

  override add(component: Component): void {
    this.children.push(component);
    component.parent = this;
  }

  override remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.parent = null!;
  }

  override isComposite() {
    return true;
  }

  getPrice(): number {
    const total = this.children.reduce(
      (acc, child) => acc + child.getPrice(),
      0
    );
    return total;
  }
}
