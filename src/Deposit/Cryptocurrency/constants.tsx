import { ReactNode } from "react";
import { CryptocurrencyCardType } from "./types";

import { ReactComponent as UsdtLogo } from "../../components/logos/usdt.svg";
import { ReactComponent as EthLogo } from "../../components/logos/eth.svg";
import { ReactComponent as BtcLogo } from "../../components/logos/btc.svg";

export const cryptocurrencyCardTitle: Record<CryptocurrencyCardType, string> = {
    [CryptocurrencyCardType.BTC]: 'BTC',
    [CryptocurrencyCardType.ETH]: 'ETH',
    [CryptocurrencyCardType.USDT]: 'USDT',
}

export const cryptocurrencyCardLogo: Record<CryptocurrencyCardType, ReactNode> = {
    [CryptocurrencyCardType.BTC]: <BtcLogo/>,
    [CryptocurrencyCardType.ETH]: <EthLogo/>,
    [CryptocurrencyCardType.USDT]: <UsdtLogo/>,
}
