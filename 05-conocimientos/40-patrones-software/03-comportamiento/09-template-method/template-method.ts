import * as XML from "xml2js";

export type TData = {
  title: string;
  priceTotal: number;
  length: number;
};

export type TSummary = {
  origin: string;
  summary: Record<string, any>;
};

export abstract class Data {
  protected abstract getData(): Promise<TData[]>;
  protected abstract getOrigin(): string;

  async getSummary(): Promise<TSummary> {
    console.log("summary");
    return {
      origin: this.getOrigin(),
      summary: await this.getData(),
    };
  }
}

export class BookStoreAreqipa extends Data {
  constructor(private readonly dataJSON: any) {
    super();
  }

  protected getData(): Promise<TData[]> {
    const data = this.dataJSON.reduce((accum: any, item: any) => {
      if (accum[item.title]) {
        accum[item.title]["priceTotal"] += item["price"];
        accum[item.title]["length"]++;
      } else {
        accum[item.title] = {};
        accum[item.title]["priceTotal"] = item["price"];
        accum[item.title]["length"] = 1;
      }

      return accum;
    }, {});

    return data;
  }
  protected getOrigin(): string {
    return "GAS - AREQUIPA";
  }
}

export class BookStoreLima extends Data {
  constructor(private readonly dataXML: any) {
    super();
  }

  protected async getData(): Promise<TData[]> {
    const promise = new Promise((resolve, reject) => {
      XML.parseString(this.dataXML, function (err, result) {
        let data = result.sales.book;
        data = data.map((el: any) => {
          return {
            title: el.title[0],
            price: +el.price[0],
          };
        });

        data = data.reduce((accum: any, item: any) => {
          if (accum[item.title]) {
            accum[item.title]["length"]++;
            accum[item.title]["priceTotal"] += item["price"];
          } else {
            accum[item.title] = {};
            accum[item.title]["length"] = 1;
            accum[item.title]["priceTotal"] = item["price"];
          }

          return accum;
        }, {});

        resolve(data);
      });
    });

    const dataResult: any = await promise;
    return dataResult;
  }

  protected getOrigin(): string {
    return "GAS - LIMA";
  }
}
