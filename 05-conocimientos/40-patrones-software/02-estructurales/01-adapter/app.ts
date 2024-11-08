import { ClientHttp, IParametersRequest } from "./adapter";

const clientHttp = new ClientHttp();

const params: IParametersRequest = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
};
clientHttp.request(params, (response: any) => console.log(response));
