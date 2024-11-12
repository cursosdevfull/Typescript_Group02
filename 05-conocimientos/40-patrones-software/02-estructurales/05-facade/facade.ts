export type IParametersSearch = {
  dateStart: Date;
  days: number;
  people: {
    adults: number;
    children: number;
  };
  price: {
    min: number;
    max: number;
  };
};

class DecameronAPI {
  searchByAvailability(parameters: IParametersSearch) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: "Decameron Lima",
            price: 300,
            type: "Luxury",
          },
          {
            name: "Decameron Cusco",
            price: 200,
            type: "Luxury",
          },
          {
            name: "Decameron Arequipa",
            price: 150,
            type: "Luxury",
          },
        ]);
      }, 2000);
    });
  }
}

class MarriotAPI {
  searchRooms(parameters: IParametersSearch) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: "Marriot Lima",
            price: 300,
            type: "Luxury",
          },
          {
            name: "Marriot Cusco",
            price: 200,
            type: "Luxury",
          },
          {
            name: "Marriot Arequipa",
            price: 150,
            type: "Luxury",
          },
        ]);
      }, 3000);
    });
  }
}
export class Facade {
  private readonly decameronAPI = new DecameronAPI();
  private readonly marriotAPI = new MarriotAPI();

  constructor() {
    this.decameronAPI = new DecameronAPI();
    this.marriotAPI = new MarriotAPI();
  }

  search(params: IParametersSearch) {
    return Promise.all([
      this.decameronAPI.searchByAvailability(params),
      this.marriotAPI.searchRooms(params),
    ]);
  }
}
