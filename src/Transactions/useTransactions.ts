import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { fetchMockData } from "../Transactions/api";
import { SortKey } from "../types";

const STEP = 3;

export const useTransactions = () => {
    const [sortKey, setSortKey] = useState<SortKey>(SortKey.ASC);
    const [items, setItems] = useState(STEP);

    const { data, isLoading } = useQuery({
        queryKey: ['transactions', sortKey, items],
        queryFn: () => fetchMockData({
            items,
            sortKey
        }),
    });

    const toggleSort = () => setSortKey(sortKey === SortKey.ASC ? SortKey.DESC : SortKey.ASC)
    const handleLoadMore = () => setItems(prevState => prevState + STEP)

    return {
        onSort: toggleSort,
        sortKey,
        onLoadMore: handleLoadMore,
        data: data?.data,
        hasNext: data?.hasNext,
        loading: isLoading
    }
};
