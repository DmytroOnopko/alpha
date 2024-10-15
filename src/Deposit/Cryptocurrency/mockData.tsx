import { generateId } from "../../utils";
import { CryptocurrencyCard, CryptocurrencyCardType } from "./types";

export const mockCards: CryptocurrencyCard[] = [
    {id: generateId(), type: CryptocurrencyCardType.BTC, commission: 0},
    {id: generateId(), type: CryptocurrencyCardType.ETH, commission: 0},
    {id: generateId(), type: CryptocurrencyCardType.USDT, commission: 0},
]
