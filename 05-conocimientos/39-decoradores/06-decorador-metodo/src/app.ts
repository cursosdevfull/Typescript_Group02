function Component(props: { selector: string; template: string }) {
  return (target: new (...args: any[]) => any) => {
    const element = document.querySelector(props.selector);
    console.log("element", element);
    if (element) {
      element.innerHTML = props.template;
      console.log("constructor", target.constructor);
      //const instance = new target.constructor();
      //console.log("current date from Component", instance.currentDate);
      //console.log("list", instance.productList);
      const button = element.querySelector("button");
      button?.addEventListener("click", () => {
        //instance.showProducts = instance.showProducts.bind(instance);
        //instance.showProducts();
      });
    }
  };
}

function MinQuantity(min: number) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("Arguments:", args);
      if (args[1] < min) throw "Quantity is too low";
      originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

@Component({
  selector: "#app",
  template: `<button id="show-product">Show products</button>`,
})
class Inventory {
  productList: any[] = [];
  currentDate = new Date();

  @MinQuantity(50)
  addProduct(productName: string, quantity: number) {
    console.log("Date from addProduct", this.currentDate);
    this.productList.push({ productName, quantity });
    console.log("Product added:", productName);
    console.log("Products", this.productList);
    console.log("this", this);
  }

  showProducts() {
    console.log("Show products");
    console.log("this showProducts", this);
    console.log(this.productList);
  }
}

const inventory = new Inventory();

setTimeout(() => {
  inventory.addProduct("Laptop", 60);
}, 3000);
