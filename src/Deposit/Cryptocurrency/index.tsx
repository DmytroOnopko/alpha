import { useQuery } from "@tanstack/react-query";

import { cryptocurrencyCardLogo, cryptocurrencyCardTitle } from "./constants";
import { CryptocurrencyCard } from "./types";
import { fetchMockData } from "./api";
import { BodyTitle } from "../../components/BodyTitle";
import { Card } from "../../components/Card";
import { CardSkeleton } from "../../components/CardSkeleton";

export const Cryptocurrency = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['cryptocurrency'],
        queryFn: fetchMockData,
    });

    return (
        <div>
            <BodyTitle>Cryptocurrency</BodyTitle>
            <CardList loading={isLoading} cards={data}/>
        </div>
    )
};

const CardList = ({loading, cards}: {loading: boolean, cards?: CryptocurrencyCard[]}) =>
    <div className="card-container">
        {loading && <Skeleton />}
        {cards?.map((card) =>
            <Card
                key={card.id}
                logo={cryptocurrencyCardLogo[card.type]}
                title={cryptocurrencyCardTitle[card.type]}
                commission={card.commission}
            />)}
    </div>

const Skeleton = () => (
    <>
        {Array.from({ length: 5 }).map((_, i) => <CardSkeleton key={i} />)}
    </>
);
