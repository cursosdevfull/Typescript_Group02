import axios from "axios";

export type IMethod = "GET" | "POST" | "PUT" | "DELETE";
export type IMethodWithBody = Exclude<IMethod, "GET" | "DELETE">;
export type IMethodWithoutBody = Extract<IMethod, "GET" | "DELETE">;

export type IParametersRequest =
  | {
      url: string;
      method: IMethodWithBody;
      body: any;
    }
  | { url: string; method: IMethodWithoutBody; body?: never };

export type IHttp = {
  request(params: IParametersRequest, cb: Function): void;
};

export class ClientHttp implements IHttp {
  request(params: IParametersRequest, cb: Function) {
    const config = {
      url: params.url,
      method: params.method,
      data: params.body,
    };

    axios.request(config).then((response) => cb(response.data));
    /*     const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        cb(JSON.parse(http.responseText));
      }
    };

    http.open(params.method, params.url);
    http.send(params.body); */
    /* return fetch(params.url, {
      method: params.method,
      body: params.body,
    })
      .then((response) => response.json())
      .then((json) => cb(json)); */
  }
}
