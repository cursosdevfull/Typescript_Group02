import { Facade } from "./facade";

const facade = new Facade();
const searchResult = facade.search({
  dateStart: new Date(),
  days: 3,
  people: {
    adults: 2,
    children: 1,
  },
  price: {
    min: 100,
    max: 300,
  },
});

searchResult.then(([decameron, marriot]) => {
  console.log("Decameron", decameron);
  console.log("Marriot", marriot);
});
