import { TextField } from "../../components/TextField";
import { Form } from "../../components/Form";
import { BodyTitle } from "../../components/BodyTitle";
import { Button } from "../../components/Button";
import {ReactComponent as CheckIcon} from "../../components/icons/check.svg";

export const PromoCode = () => {
    return(
        <div className="deposit-PromoCode">
            <BodyTitle>Have a promo code?</BodyTitle>
            <Field/>
        </div>
    )
};

const Field = () => {
    return(
        <Form>
            <TextField
                label="Enter promo code here. It will activate a special bonus!"
                endIcon={<CheckIcon/>}
            />
            <Button title="Apply" onClick={() => null}/>
        </Form>
    )
}
