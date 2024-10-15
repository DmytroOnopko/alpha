import { CardType } from "../Deposit/Cards/types";

export enum TransactionStatus {
    PROCESSING = 'processing',
    ACTIVE = 'active',
    PERFORMED = 'performed'
}

export interface Transaction {
    id: number;
    type: CardType;
    transactionNumber: number;
    paymentDate: number;
    amount: number;
    status: TransactionStatus;
}



