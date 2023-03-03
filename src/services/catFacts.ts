import {sendRequestAsync} from "../utils/backend";
import {Fact} from "../types/Fact";

const getRandomFact = async (): Promise<Fact> => {
    return await sendRequestAsync('fact');
}

const catFactsApi = {
    getRandomFact
}

export default catFactsApi;