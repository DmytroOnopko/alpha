import { format } from 'date-fns';

import { transactionLogo, transactionTitle } from "../constants";
import { Status } from "../components/Status";
import { LogoSkeleton, TextSkeleton } from "../../components/CardSkeleton";
import { Table } from "../../components/Table";
import { Transaction } from "../types";

interface Props {
    data?: Transaction[];
    loading: boolean;
}

export const Desktop = ({data, loading}: Props) => {
    return(
        <Table>
            <Table.Body>
                {loading && <Skeleton />}
                {data?.map((item) => (
                    <Table.Row>
                        <Table.Cell>
                            <Table.CellLogo>
                                {transactionLogo[item.type]}
                            </Table.CellLogo>
                        </Table.Cell>
                        <Table.CellHead>
                            <Table.CellTitle>by {transactionTitle[item.type]}, USD</Table.CellTitle>
                            <Table.CellSubTitle>Withdraw</Table.CellSubTitle>
                        </Table.CellHead>
                        <Table.Cell>
                            <Table.CellTitle>{item.transactionNumber}</Table.CellTitle>
                            <Table.CellSubTitle>Transaction Number</Table.CellSubTitle>
                        </Table.Cell>
                        <Table.Cell>
                            <Table.CellTitle>{format(new Date(item.paymentDate), 'dd.MM \'at\' hh:mm a')}</Table.CellTitle>
                            <Table.CellSubTitle>Payment Date</Table.CellSubTitle>
                        </Table.Cell>
                        <Table.Cell>
                            <Table.CellTitle>{item.amount}$</Table.CellTitle>
                            <Table.CellSubTitle>Amount Payed</Table.CellSubTitle>
                        </Table.Cell>
                        <Table.Cell>
                            <Table.CellTitle><Status status={item.status} /></Table.CellTitle>
                            <Table.CellSubTitle>Operation Status</Table.CellSubTitle>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
};

const Skeleton = () => {
    return(
        <>
            {
                Array.from({length: 6}).map((_, i) => (
                    <Table.Row key={i}>
                        <Table.Cell>
                            <LogoSkeleton/>
                        </Table.Cell>
                        <Table.Cell>
                            <TextSkeleton/>
                        </Table.Cell>
                        <Table.Cell>
                            <TextSkeleton/>
                        </Table.Cell>
                        <Table.Cell>
                            <TextSkeleton/>
                        </Table.Cell>
                        <Table.Cell>
                            <TextSkeleton/>
                        </Table.Cell>
                        <Table.Cell>
                            <TextSkeleton/>
                        </Table.Cell>
                    </Table.Row>
                ))
            }
        </>
    )
}
