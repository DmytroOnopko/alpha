import { ReactNode } from "react";

interface CardProps<State extends string = ''> {
    logo: ReactNode;
    title: string;
    commission: number;
    onClick?:() => void;
    state?: State;
}

export const Card = <State extends string>({logo, title, commission, state, onClick}: CardProps<State>) =>
    <div className="card" onClick={onClick}>
        <div className="card-logo">
            {logo}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-commission">Commission {commission}%</p>
        <State state={state}/>
    </div>


const State = <State extends string>({state}: {state: CardProps<State>['state']}) => {
    if (!state) return null;

    const modClass = state ? `card-state_${state}` : '';

    return <p className={`card-state ${modClass}`}>{state}</p>;
}
