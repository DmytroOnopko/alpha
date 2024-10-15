import { generateId } from "../utils";
import { CardType } from "../Deposit/Cards/types";
import { Transaction, TransactionStatus } from "./types";

export const mockData = generateMockData();

function generateMockData (): Transaction[] {
    return Array.from({length: 25}).map((_, i) => ({
        type: generateType(),
        transactionNumber: generateTransactionNumber(),
        paymentDate: generatePaymentDateInMilliseconds(i),
        amount: generateAmountNumber(),
        status: generateStatus(),
        id: generateId(),
    }))
}

function generateType() {
    const cardTypes = Object.values(CardType);
    const randomIndex = Math.floor(Math.random() * cardTypes.length);

    return cardTypes[randomIndex];
}

function generatePaymentDateInMilliseconds (days: number) {
    const daysInMilliseconds = days * 24 * 60 * 60 * 1000;

    return Date.now() - daysInMilliseconds;
}

function generateTransactionNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

function generateAmountNumber() {
    const integerPart = Math.floor(Math.random() * 90) + 10;
    const decimalPart = Math.floor(Math.random() * 100);

    return parseFloat(`${integerPart}.${decimalPart < 10 ? '0' : ''}${decimalPart}`);
}

function generateStatus() {
    const statuses = Object.values(TransactionStatus);
    const randomIndex = Math.floor(Math.random() * statuses.length);

    return statuses[randomIndex];
}
