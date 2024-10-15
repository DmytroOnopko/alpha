import { ReactNode } from "react";

interface Props {
    onClick?: () => void,
    title: ReactNode,
    className?: string,
    disabled?: boolean,
}

export const Button = ({ onClick = () => null, title, className = '', disabled = false }: Props) => {
    return (
        <button disabled={disabled} className={`app-button ${className}`} onClick={onClick}>
            {title}
        </button>
    );
};
