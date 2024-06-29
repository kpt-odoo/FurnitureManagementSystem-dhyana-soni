import { loadStripe } from "@stripe/stripe-js";
export async function checkout() {
    let stripepromise = null
    let getstripe = () => {
        if (!stripepromise) {
            let stripepromisse = loadStripe("dfaddscdfc4541")

        }
        return stripepromise
        const stripe = await getstripe()
        await stripepromise.redirect.redirect({
            mode: "payment",
            lineitems,
            success: '${window.location.origin}'
        })
    }
}