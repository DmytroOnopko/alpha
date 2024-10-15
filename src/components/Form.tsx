import { PropsWithChildren } from "react";

export const Form = ({children, noValidate = true, className = ''}: PropsWithChildren & {noValidate?: boolean; className?: string}) =>
    <form
        className={`promo-form ${className}`}
        onSubmit={(e) => e.preventDefault()}
        noValidate={noValidate}>
        {children}
    </form>
