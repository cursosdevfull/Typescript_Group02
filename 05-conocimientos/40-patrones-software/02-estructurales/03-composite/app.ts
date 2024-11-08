import { Box, Product } from "./composite";

const boxMain = new Box();

boxMain.add(new Product(10));
boxMain.add(new Product(20));

const box1 = new Box();
box1.add(new Product(30));
box1.add(new Product(40));
box1.add(new Product(50));
boxMain.add(box1);

const box2 = new Box();
box2.add(new Product(60));

const box2_1 = new Box();
box2_1.add(new Product(70));
const product = new Product(80);
box2_1.add(product);
box2.add(box2_1);

boxMain.add(box2);

console.log("before", boxMain.getPrice());
box2_1.remove(product);
console.log("after", boxMain.getPrice());
