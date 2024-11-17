export class Account {
  constructor(
    private accountId: number,
    private owner: string,
    private cash: number
  ) {}

  getCash(): number {
    return this.cash;
  }

  getOwner(): string {
    return this.owner;
  }

  setCash(cash: number): void {
    this.cash = cash;
  }
}

export type TAccountProxy = {
  increaseCash(account: Account, amount: number): void;
  decreaseCash(account: Account, amount: number): void;
};

export class AccountPremium implements TAccountProxy {
  private cash: number = 0;

  increaseCash(account: Account, amount: number): void {
    const cash = account.getCash();
    account.setCash(cash + amount);
  }

  decreaseCash(account: Account, amount: number): void {
    const cash = account.getCash();
    account.setCash(cash - amount);
  }

  showCash(account: Account): void {
    console.log(`Cash: ${account.getCash()}`);
  }
}

export class AccountFree implements TAccountProxy {
  private cash: number = 0;
  private readonly feeIncrease = 1;
  private readonly feeDecrease = 2;

  increaseCash(account: Account, amount: number): void {
    const cash = account.getCash();
    account.setCash(cash + amount + this.feeIncrease);
  }

  decreaseCash(account: Account, amount: number): void {
    const cash = account.getCash();
    account.setCash(cash - amount - this.feeIncrease);
  }

  showCash(account: Account): void {
    console.log(`Cash: ${account.getCash()}`);
  }
}
