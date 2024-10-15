import { CardEntity } from "../../types";

export enum CryptocurrencyCardType {
    BTC = 'btc',
    ETH = 'eth',
    USDT = 'usdt',
}

export type CryptocurrencyCard = CardEntity<CryptocurrencyCardType>;
