function Book(props: { selector: string; isUpper: boolean }) {
  return function (constructor: new (...args: any[]) => any) {
    const element = document.querySelector(props.selector);
    const instance = new constructor();

    if (element) {
      element.innerHTML = `<h1>${
        props.isUpper
          ? instance.title.toUpperCase()
          : instance.title.toLowerCase()
      }`;
    }
  };
}

function Log01(prefix: string) {
  return function (target: any, propertyKey: string) {
    console.log("target", target, propertyKey);
    console.log("property", propertyKey);

    let value: string;

    const getter = () => {
      console.log("getter");
      return value;
    };

    const setter = (newValue: string) => {
      console.log("setter");
      value = `${prefix}: ${newValue}`;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

@Book({ selector: "#app", isUpper: true })
class Product {
  @Log01("Libro")
  title = "ProductTitle";
}
