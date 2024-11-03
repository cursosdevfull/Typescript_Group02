interface Controllers {
  [key: string]: new (...args: any[]) => any;
}

interface Product {
  category: "electronic" | "furniture";
  title: string;
}

interface IInyection {
  getName(): string;
}

class ProductService {
  private products: Product[] = [
    { category: "electronic", title: "TV" },
    { category: "furniture", title: "Chair" },
    { category: "electronic", title: "Phone" },
    { category: "furniture", title: "Table" },
  ];

  getAll() {
    return [...this.products];
  }

  add(product: Product) {
    this.products.push(product);
  }
}

class HomeController implements IInyection {
  products: Product[] = [];
  productType: string = "All";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService.getAll();
  }

  getName(): string {
    return "HomeController";
  }
}

class ElectronicController implements IInyection {
  products: Product[] = [];
  productType: string = "All";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService
      .getAll()
      .filter((product) => product.category === "electronic");

    productService.add({ category: "electronic", title: "New TV" });
    productService.add({ category: "furniture", title: "New Chair" });
  }

  getName(): string {
    return "ElectronicController";
  }
}

class FurnitureController implements IInyection {
  products: Product[] = [];
  productType: string = "All";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService
      .getAll()
      .filter((product) => product.category === "furniture");
  }

  getName(): string {
    return "FurnitureController";
  }
}

const routes: Controllers = {
  "/": HomeController,
  "/electronic": ElectronicController,
  "/furniture": FurnitureController,
};

function renderProduct(route: string) {
  const classAssociated = routes[route];
  console.log(classAssociated);
}

renderProduct("/electronic");
