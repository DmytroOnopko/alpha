import { TransactionStatus } from "../../Transactions/types";
import { transactionStatus } from "../../Transactions/constants";

export const Status = ({status}: {status: TransactionStatus}) =>
    <p className={`transactions-status transactions-status_${status}`}>{transactionStatus[status]}</p>;
