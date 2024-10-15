import { PromoCode } from "./PromoСode";
import { Cryptocurrency } from "./Cryptocurrency";
import { Cards } from "./Cards";

export const Deposit = () => {
    return(
        <div className="block-deposit">
            <h2 className="block-title">Make a deposit</h2>
            <h3 className="block-subTitle">Choose payment method</h3>
            <Cards/>
            <Cryptocurrency/>
            <PromoCode/>
        </div>
    )
};
