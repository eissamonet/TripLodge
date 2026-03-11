import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) =>{
    try {
        const {name, address, contact, city} = req.body;
        const owner = req.user._id


    } catch (error) {

    }
}