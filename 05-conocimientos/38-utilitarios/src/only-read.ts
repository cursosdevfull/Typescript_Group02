type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const product: Readonly<Product> = {
  id: 1,
  name: "Laptop",
  price: 1500,
  stock: 150,
};
