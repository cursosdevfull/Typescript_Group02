type Verbs2 = "GET" | "POST" | "PUT" | "DELETE";
type WithBody2 = Extract<Verbs2, "POST" | "PUT">;
type WithoutBody2 = Exclude<Verbs2, WithBody2>;

const config2: Record<WithoutBody2, string> = {
  GET: "get",
  DELETE: "delete",
};
