import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Dialog } from "./components/Dialog";

import { Card } from "./types";
import { fetchMockData } from "./api";
import { cardLogo, cardTitle } from "./constants";
import { Card as CardItem } from '../../components/Card';
import { BodyTitle } from "../../components/BodyTitle";
import { CardSkeleton } from "../../components/CardSkeleton";

export const Cards = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['cards'],
        queryFn: fetchMockData,
    });

    const [selectedCard, setSelectedCard] = useState<Card | null>(null)

    return(
        <div>
            <BodyTitle>Cards, e-money, PIN</BodyTitle>
            <CardList
                loading={isLoading}
                cards={data}
                onSelect={(card) => setSelectedCard(card)}
            />
            <Dialog card={selectedCard} onClose={() => setSelectedCard(null)}/>
        </div>
    )
};

const CardList = ({loading, cards, onSelect}: {loading: boolean, onSelect: (card: Card) => void, cards?: Card[]}) =>
    <div className="card-container">
        {loading && <Skeleton />}
        {cards?.map((card) =>
            <CardItem
                key={card.id}
                logo={cardLogo[card.type]}
                title={cardTitle[card.type]}
                commission={card.commission}
                state={card.state}
                onClick={() => onSelect(card)}/>)}
    </div>;

const Skeleton = () => (
    <>
        {Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)}
    </>
);
