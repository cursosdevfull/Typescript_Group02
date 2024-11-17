import { BookStoreAreqipa, BookStoreLima, Data } from "./template-method";

const dataJSON = [
  { title: "Title01", price: 80 },
  { title: "Title02", price: 60 },
  { title: "Title01", price: 40 },
  { title: "Title04", price: 20 },
];

const dataXML = `
      <sales>
          <book>
              <title>Title01</title>
              <price>50</price>
          </book>
          <book>
              <title>Title02</title>
              <price>70</price>
          </book>
          <book>
              <title>Title04</title>
              <price>100</price>
          </book>
          <book>
              <title>Title04</title>
              <price>20</price>
          </book>
      </sales>
  `;

const main = async () => {
  const dataSOAP: Data = new BookStoreLima(dataXML);
  const dataREST: Data = new BookStoreAreqipa(dataJSON);

  console.log(await dataSOAP.getSummary());
  console.log(await dataREST.getSummary());
};

main();
