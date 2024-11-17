import { ProductDiscount, ProductNormal, Tax } from "./visitor";

const tax = new Tax();
const productNormal = new ProductNormal(1000);
const productDiscount = new ProductDiscount(500);

const normalPrice = productNormal.accept(tax);
const discountPrice = productDiscount.accept(tax);

console.log("normalPrice", normalPrice);
console.log("discountPrice", discountPrice);
