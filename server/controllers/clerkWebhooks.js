import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res)=>{
    try {
        // create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        // getting headers
        const headers = {
          "svix-id": req.headers['svix-id'],
          "svix-timestamp": req.headers['svix-timestamp'],
          "svix-signature": req.headers['svix-signature'],
        };

        // verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        // verifying headers
        const {data, type} = req.body

        const userDate = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + '' + data.last_name,
            image: data.image_url,
        }

    } catch (error) {

    }

}