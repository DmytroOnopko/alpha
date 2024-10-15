import { ReactNode } from 'react';

export const TextField = ({label, endIcon, placeholder}: {label: ReactNode, endIcon: ReactNode, placeholder?: string}) =>
    <div className="promo-field">
        <label htmlFor="promo">{label}</label>
        <div>
            <input type="text" id="promo" name="promo" placeholder={placeholder}/>
            {endIcon}
        </div>
    </div>
