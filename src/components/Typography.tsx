import { ReactNode } from 'react';

interface Props {
    variant?: 'primary' | 'large' | 'medium' | 'small' | 'tiny',
    component?: 'h4' | 'p',
    children: ReactNode,
}

export const Typography = ({component = 'p', variant = 'primary', children}: Props) => {
    switch (component) {
        case 'h4':
            return <h4 className={`app-text_${variant}`}>{children}</h4>
        default:
            return <p className={`app-text_${variant}`}>{children}</p>
    }
};
