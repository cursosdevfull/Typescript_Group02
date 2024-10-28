enum CURRENCY {
  PEN = "PEN",
  USD = "USD",
  EUR = "EUR",
}

const courseDev: {
  title: string;
  description: string;
  premium: boolean;
  student: number;
  duration: number;
  requeriments: string[];
  teacher: string;
  price: Array<[CURRENCY, number]>;
} = {
  title: "Curso de Typescript PRO 2020",
  description: "Aprende Typescript desde cero a nivel profesional",
  premium: true,
  student: 50,
  teacher: "Beto Quiroga",
  duration: 50,
  requeriments: ["Conocimientos básicos de programación", "Ganas de aprender"],
  price: [
    [CURRENCY.PEN, 600],
    [CURRENCY.USD, 200],
  ],
};

courseDev.duration = 60;
courseDev.student = 60;
courseDev.requeriments.push("Experiencia con POO");
courseDev.price.push([CURRENCY.EUR, 150]);

console.log(courseDev);

const reference = document.querySelector("#title")!;
reference.innerHTML = courseDev.title;

const list = document.querySelector("#list")!;
const priceList = document.querySelector("#prices")!;

for (const requeriment of courseDev.requeriments) {
  const li = document.createElement("li");
  li.textContent = requeriment;
  list.append(li);
}

for (const price of courseDev.price) {
  const li = document.createElement("li");
  li.textContent = `${price[0]} - ${price[1]}`;
  priceList.append(li);
}
