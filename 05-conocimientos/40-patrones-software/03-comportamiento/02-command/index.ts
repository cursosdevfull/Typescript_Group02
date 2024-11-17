import {
  AddOrderCommand,
  AnnuelOrderCommand,
  TAnnuelOrder,
  TOrder,
} from "./command";

function AddOrder(order: TOrder) {
  return new AddOrderCommand({ payload: order });
}

function AnnuelOrder(annuel: TAnnuelOrder) {
  return new AnnuelOrderCommand({ payload: annuel });
}

const commands = [
  AddOrder({
    orderId: 1,
    customerId: 1,
    products: ["product1", "product2"],
  }),
  AnnuelOrder({
    orderId: 1,
    customerId: 1,
  }),
];

commands.forEach((command) => command.execute());
