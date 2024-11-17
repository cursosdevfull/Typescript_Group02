enum OfferKind {
  ProductNormal,
  ProductDiscount,
}

export type TVisitable = {
  accept(visitor: Visitor): number;
};

export class ProductNormal implements TVisitable {
  readonly kind = OfferKind.ProductNormal;

  constructor(private readonly price: number) {}

  get Price(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visit(this);
  }
}

export class ProductDiscount implements TVisitable {
  readonly kind = OfferKind.ProductDiscount;

  constructor(private readonly price: number) {}

  get Price(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visit(this);
  }
}

export interface Visitor {
  visit(entity: unknown): number;
}

export class Tax implements Visitor {
  readonly taxNormal = 1.18;
  readonly taxDiscount = 1;

  visit(entity: unknown): number {
    if (entity instanceof ProductNormal) {
      return Math.round(entity.Price * this.taxNormal);
    } else if (entity instanceof ProductDiscount) {
      return Math.round(entity.Price * this.taxDiscount);
    }
  }
}
