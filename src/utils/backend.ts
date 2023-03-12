import { apiBase } from "../constants/env";
import { Request } from "../types/backend";


export async function sendRequestAsync(request: string | Request): Promise<any> {
  switch (typeof request) {
    case "string":
      return await fetch(apiBase + request).then(response => response.json());
    case "object":
      return await fetch(apiBase + request.url, {method: request.method, body: JSON.stringify(request.body)})
        .then(response => response.json());
    default:
      throw Error(`argument of type ${typeof request} in not a valid request`);
  }
}
