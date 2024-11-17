import { Account, AccountFree, AccountPremium } from "./proxy";

const account = new Account(100, "John Doe", 1.2);

const account01 = new AccountFree();
account01.increaseCash(account, 100);
account01.showCash(account);

const account02 = new AccountPremium();
account02.increaseCash(account, 100);
account02.showCash(account);
