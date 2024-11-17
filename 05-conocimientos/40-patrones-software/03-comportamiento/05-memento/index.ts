import { ShoppingCart, Store } from "./memento";

const store = new Store();

const shoppingCart = new ShoppingCart();
shoppingCart.setState({ products: [{ name: "product01", quantity: 3 }] });
store.addState(shoppingCart.saveState());

shoppingCart.setState({
  products: [
    { name: "product01", quantity: 3 },
    { name: "product02", quantity: 5 },
    { name: "product03", quantity: 1 },
  ],
});

store.addState(shoppingCart.saveState());

shoppingCart.setState({
  products: [
    { name: "product01", quantity: 3 },
    { name: "product05", quantity: 2 },
  ],
});
store.addState(shoppingCart.saveState());

console.log(
  "Current state: ",
  JSON.stringify(shoppingCart.showState(), null, "\t")
);
shoppingCart.restoreState(store.getState(1));
console.log(
  "New Current state: ",
  JSON.stringify(shoppingCart.showState(), null, "\t")
);

console.log("Total states: ", JSON.stringify(store.getAllStates(), null, "\t"));
