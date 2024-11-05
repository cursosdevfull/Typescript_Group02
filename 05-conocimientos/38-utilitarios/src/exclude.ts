type Verbs = "GET" | "POST" | "PUT" | "DELETE";
type WithBody = "POST" | "PUT";
type WithoutBody = Exclude<Verbs, WithBody>;

const config: Record<WithoutBody, string> = {
  GET: "get",
  DELETE: "delete",
};
