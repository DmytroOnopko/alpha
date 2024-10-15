import { format } from "date-fns";

import { transactionLogo, transactionTitle } from "../constants";
import { TextSkeleton } from "../../components/CardSkeleton";
import { Status } from "../components/Status";
import { Table } from "../../components/Table";
import { Transaction } from "../../Transactions/types";

interface Props {
    data?: Transaction[];
    loading: boolean;
}

export const Mobile = ({data, loading}: Props) => {
    return(
        <Table>
            <Table.Body>
                {loading && <Skeleton/>}
                {data?.map((item) => (
                    <>
                        <Table.Row underline={false}>
                            <Table.Cell colspan={1} className="table-transactionsCell_mobile">
                                {transactionLogo[item.type]}
                            </Table.Cell>
                            <Table.Cell className="table-transactionsCell_mobile">
                                <Table.CellTitle><Status status={item.status} /></Table.CellTitle>
                                <Table.CellSubTitle>Operation Status</Table.CellSubTitle>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row underline={false}>
                            <Table.Cell>
                                <Table.CellTitle>by {transactionTitle[item.type]}, USD</Table.CellTitle>
                                <Table.CellSubTitle>Withdraw</Table.CellSubTitle>
                            </Table.Cell>
                            <Table.Cell>
                                <Table.CellTitle>{item.transactionNumber}</Table.CellTitle>
                                <Table.CellSubTitle>Transaction Number</Table.CellSubTitle>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Table.CellTitle>{format(new Date(item.paymentDate), 'dd.MM \'at\' hh:mm a')}</Table.CellTitle>
                                <Table.CellSubTitle>Payment Date</Table.CellSubTitle>
                            </Table.Cell>
                            <Table.Cell>
                                <Table.CellTitle>{item.amount}$</Table.CellTitle>
                                <Table.CellSubTitle>Amount Payed</Table.CellSubTitle>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="table-transactionsRow_mobile-divider"/>
                    </>
                ))}
            </Table.Body>
        </Table>
    )
};

const Skeleton = () => {
    return(
        <>
            {
                Array.from({length: 3}).map((_, i) => (
                    <>
                        <Table.Row underline={false}>
                            <Table.Cell colspan={2} className="table-transactionsCell_mobile">
                                <TextSkeleton/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row underline={false}>
                            <Table.Cell>
                                <TextSkeleton/>
                            </Table.Cell>
                            <Table.Cell>
                                <TextSkeleton/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TextSkeleton/>
                            </Table.Cell>
                            <Table.Cell>
                                <TextSkeleton/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="table-transactionsRow_mobile-divider"/>
                    </>
                ))
            }
        </>
    )
}
