export enum SortKey {
    ASC = 'asc',
    DESC = 'desc'
}

export interface CardEntity<
    Card extends string,
    State extends string | undefined = undefined
> {
    id: number;
    type: Card;
    commission: number;
    state?: State;
}
