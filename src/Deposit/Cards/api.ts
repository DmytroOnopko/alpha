import { Card } from "./types";
import { mockCards } from "./mockData";

export const fetchMockData = (): Promise<Card[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockCards);
        }, 500);
    });
};
