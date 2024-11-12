import { Account, AccountProxyBankB } from "./proxy";

const account = new Account(100, "John Doe", 1.2);
const accountProxy = new AccountProxyBankB();

accountProxy.increaseCash(account, 100);
accountProxy.showCash(account);
