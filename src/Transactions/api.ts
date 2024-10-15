import { Transaction } from "./types";
import { SortKey } from "../types";
import { mockData } from "./mockData";

interface Params {
    items: number;
    sortKey: SortKey;
}

export const fetchMockData = ({items, sortKey}: Params): Promise<{data: Transaction[], hasNext: boolean}> => {
    const data = sort(mockData.slice(0, items), sortKey);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({data, hasNext: !(items > mockData.length)});
        }, 500);
    });
};

function sort(data: Transaction[], order: SortKey){
    return data.sort((a, b) => order === 'asc' ? a.paymentDate - b.paymentDate : b.paymentDate - a.paymentDate);
}
