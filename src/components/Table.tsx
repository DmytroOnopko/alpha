import { PropsWithChildren } from "react";

export const Table = ({children}: PropsWithChildren) =>
    <div className={'app-tableContainer'}>
        <table className={`app-table`}>{children}</table>
    </div>;

Table.Body = ({children}: PropsWithChildren) => <tbody className="app-tableBody">{children}</tbody>;
Table.Row = ({children, underline = true, className = ''}: PropsWithChildren & {underline?: boolean; className?: string}) => <tr className={`app-tableRow ${underline ? 'add-tableRow_underline' : ''} ${className}`}>{children}</tr>
Table.Cell = ({children, colspan, rowspan, className = ''}: PropsWithChildren & {colspan?: number; rowspan?: number; className?: string}) => <td colSpan={colspan} rowSpan={rowspan} className={`app-table__cell ${className}`}>{children}</td>
Table.CellHead = ({children}: PropsWithChildren) => <th className="app-table__cellHead">{children}</th>
Table.CellLogo = ({children}: PropsWithChildren) => <div className="app-table__cellLogo">{children}</div>
Table.CellTitle = ({children}: PropsWithChildren) => <p className="app-table__cellTitle">{children}</p>
Table.CellSubTitle = ({children}: PropsWithChildren) => <p className="app-table__cellSubTitle">{children}</p>
