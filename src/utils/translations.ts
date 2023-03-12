import { translateApiBase } from "../constants/env";
import { TranslateRequest, TranslateResponse } from "../types/translations";
import { sendRequestAsync } from "./backend";
import { Request } from "../types/backend";

export async function translateAsync(request: TranslateRequest): Promise<TranslateResponse> {
  return await sendRequestAsync({
    url: translateApiBase + "mt",
    method: "POST",
    body: request
  } as Request)
}