import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from "react-dom";


export const Dialog = ({children, open, onClose}: PropsWithChildren & {open: boolean; onClose(): void}) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.focus();
            dialogRef.current.tabIndex = 0;

            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    if (!open) return null;

    return(
        <>
            {createPortal(
                <div className="app-dialogContainer">
                    <div
                        ref={dialogRef}
                        className="app-dialog"
                        tabIndex={0}
                        onBlur={onClose}
                    >
                        {children}
                    </div>
                </div>,
                document.body
            )}
        </>
    )
};
