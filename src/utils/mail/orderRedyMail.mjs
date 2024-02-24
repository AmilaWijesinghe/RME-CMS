import { transporter } from "./nodeMailer.mjs"





export const sendMail = async(id) => {
    try {
        await transporter.sendMail(orderMail)
    } catch (error) {
        
    }
}