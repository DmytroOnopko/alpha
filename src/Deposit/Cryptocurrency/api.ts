import { CryptocurrencyCard } from "./types";
import { mockCards } from "./mockData";

export const fetchMockData = (): Promise<CryptocurrencyCard[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockCards);
        }, 500);
    });
};
