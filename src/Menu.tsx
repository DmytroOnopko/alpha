import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as LogoSmIcon } from './components/icons/logo_sm.svg';
import { ReactComponent as CloseIcon } from './components/icons/close.svg';

export const Menu = ({open, onClose}: PropsWithChildren & {open: boolean; onClose(): void}) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.focus();
            menuRef.current.tabIndex = 0;

            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    if (!open) return null;

    return (
        <>
            {createPortal(
                <div className="app-menu"
                     ref={menuRef}
                     tabIndex={0}
                     onBlur={onClose}>
                    <Header onClose={onClose}/>
                    <Pages/>
                </div>,
                document.body
            )}
        </>
    );
};

const Header = ({onClose}: { onClose(): void }) => (
    <div className="header-menu">
        <LogoSmIcon/>
        <CloseIcon onClick={onClose}/>
    </div>
);

const Pages = () => (
    <ul className="list-menu">
        {pages.map(({ key, title }) => (
            <li key={key}>{title}</li>
        ))}
    </ul>
);

const pages: { key: number; title: string }[] = [
    { key: 1, title: 'Casino Games' },
    { key: 2, title: 'Live Games' },
    { key: 3, title: 'TV-Bet' },
    { key: 4, title: 'Sport Games' },
    { key: 5, title: 'Virtual' },
    { key: 6, title: 'Tournaments' },
    { key: 7, title: 'Spin Shop' },
    { key: 8, title: 'FAQ' },
    { key: 9, title: 'Support Chat' },
];
