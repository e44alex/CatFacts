import { sendRequestAsync } from "../utils";
import { Fact } from "../types/Fact";

const getRandomFact = async (): Promise<Fact> => {
  return await sendRequestAsync('fact');
}

const catFactsApi = {
  getRandomFact
}

export default catFactsApi;