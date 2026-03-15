import Hotel from "../models/Hotel";
import { v2 as cloudinary } from "cloudinary"

// api to create a new room for a hotel
export const createRoom = async (req, res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "No Hotel Found"});

        // upload images to cloudinary
        const uploadImages = req.files.map(async (file) => {
           const response = await cloudinary.uploader.upload(file.path);
           return response.secure_url;
        })
        // wait for all uploads to complete

        const images = await Promise.all(uploadImages)
    } catch (error) {

    }
}


// api to get all rooms
export const getRooms = async (req, res)=>{

}


// api to get all rooms for a specific hotel
export const getOwnerRooms = async (req, res)=>{

}

// api to toggle availability of a room
export const toggleRoomAvailability = async (req, res)=>{

}