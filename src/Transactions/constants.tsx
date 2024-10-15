import { ReactNode } from "react";

import { TransactionStatus } from "./types";
import { CardType } from "../Deposit/Cards/types";
import { PinLogo } from "../components/logos/pin";
import {ReactComponent as McLogo} from "../components/logos/ms.svg";
import {ReactComponent as VisaLogo} from "../components/logos/visa.svg";
import {ReactComponent as SkrillLogo} from "../components/logos/skrill.svg";
import {ReactComponent as PmLogo} from "../components/logos/pm.svg";
import {ReactComponent as PiastrixLogo} from "../components/logos/piastrix.svg";
import {ReactComponent as SticpayLogo} from "../components/logos/sticpay.svg";

export const transactionTitle: Record<CardType, string> = {
    [CardType.MC]: 'Mastercard',
    [CardType.VISA]: 'Visa',
    [CardType.SKRILL]: 'Skrill',
    [CardType.PM]: 'Perfect Money, EUR',
    [CardType.PIASTRIX]: 'Piastrix, EUR',
    [CardType.STICPAY]: 'SticPay',
    [CardType.PIN]: 'PIN',
}

export const transactionStatus: Record<TransactionStatus, string> = {
    [TransactionStatus.PERFORMED]: 'Performed',
    [TransactionStatus.PROCESSING]: 'Processing',
    [TransactionStatus.ACTIVE]: 'Active',
}

export const transactionLogo: Record<CardType, ReactNode> = {
    [CardType.MC]: <McLogo/>,
    [CardType.VISA]: <VisaLogo/>,
    [CardType.SKRILL]: <SkrillLogo/>,
    [CardType.PM]: <PmLogo/>,
    [CardType.PIASTRIX]: <PiastrixLogo/>,
    [CardType.STICPAY]: <SticpayLogo/>,
    [CardType.PIN]: <PinLogo className="pin-logo_transaction"/>,
}
