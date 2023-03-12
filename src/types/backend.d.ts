export interface Request {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: any;
}