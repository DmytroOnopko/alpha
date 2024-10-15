import { useState } from "react";
import { Container } from "./components/Container";
import { Menu } from "./Menu";
import { MediaQueries, useMediaQuery } from "./components/hooks/useMediaQuery";
import { ReactComponent as LogoSm } from './components/icons/logo_sm.svg';
import { ReactComponent as LogoLg } from './components/icons/logo_lg.svg';
import { ReactComponent as Search } from './components/icons/search.svg';
import { ReactComponent as Gift } from './components/icons/gift.svg';
import { ReactComponent as Bell } from './components/icons/bell.svg';
import { ReactComponent as Chevron } from './components/icons/down_chevron.svg';
import { ReactComponent as Plus } from './components/icons/plus.svg';
import { ReactComponent as MenuIcon } from './components/icons/menu.svg';

export const Header = () => {
    return(
        <div className='app-header'>
            <Container>
                <div className="header-container">
                    <LeftSide/>
                    <RightSide/>
                </div>
            </Container>
        </div>
    );
};

const LeftSide = () => {
    const smDownBreakpoint = useMediaQuery(MediaQueries.SM);
    const [open, setOpen] = useState(false);

    return(
        <div className="left-container">
            <MenuIcon onClick={() => setOpen(!open)} />
            <Menu open={open} onClose={() => setOpen(false)}/>
            {smDownBreakpoint ? <LogoSm/> : <LogoLg/>}
        </div>
    )
}

const RightSide = () => {
    const smDownBreakpoint = useMediaQuery(MediaQueries.SM);

    return(
        <div className="right-container">
            {!smDownBreakpoint &&
                (<>
                    <Search/>
                    <Gift/>
                    <Bell/>
                </>)
            }
            <div className="button-container">
                <AmountButton/>
                <AddButton/>
            </div>
            {!smDownBreakpoint && <Avatar/>}
        </div>
    )
}

const AmountButton = () =>
    <button className="amount-button">
        <p className="amount-button__amount">125.02 $</p>
        <p className="amount-button__discount">13%</p>
        <Chevron/>
    </button>;

const AddButton = () => <button className="add-button"><Plus/></button>;

const Avatar = () => <div className="img-avatar"/>
