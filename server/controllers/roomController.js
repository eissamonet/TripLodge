import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary"
import Room from "../models/Room.js";

// api to create a new room for a hotel
export const createRoom = async (req, res) => {
   try {
    const { roomType, pricePerNight, amenities } = req.body;

    const clerkUserId = req.auth().userId;
    console.log("🔍 Clerk userId from token:", clerkUserId);

    // Check what's actually stored in the Hotel collection
    const allHotels = await Hotel.find({});
    console.log("🏨 All hotels in DB:", JSON.stringify(allHotels, null, 2));

    const hotel = await Hotel.findOne({ owner: req.auth().userId });
    console.log("🔎 Hotel found:", hotel);

    if (!hotel) {
      return res.json({ success: false, message: "No Hotel Found" });
    }

    if (!req.files || req.files.length === 0) {
      return res.json({ success: false, message: "Please upload images" });
    }

    const uploadImages = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const images = await Promise.all(uploadImages);

    let parsedAmenities = [];
    try {
      parsedAmenities = amenities ? JSON.parse(amenities) : [];
    } catch {
      return res.json({ success: false, message: "Invalid amenities formate" });
    }

    await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: parsedAmenities,
      images,
    });

    res.json({ success: true, message: "Room created successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// api to get all rooms
export const getRooms = async (req, res)=>{

    try {
       const rooms =  await Room.find({isAvailable: true}).populate({
        path: 'hotel',
        populate:{
            path: 'owner',
            select: 'image'
        }
       }).sort({createdAt: -1 })
       res.json({success: true, rooms});
    } catch (error) {
       res.json({success: false, message: error.message});

    }

}


// api to get all rooms for a specific hotel
export const getOwnerRooms = async (req, res)=>{
    try {
        const hotelData = await Hotel.findOne({ owner: req.auth().userId });
        const rooms = await Room.find({hotel: hotelData._id.toString()}).populate
        ('hotel');
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message});
    }

}

// api to toggle availability of a room
export const toggleRoomAvailability = async (req, res)=>{
    try {
        const { roomId } = req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save();
        res.json({ success: true, message: "Room availability updated"})
    } catch (error) {
        res.json({ success: false, message: error.message})
    }

}