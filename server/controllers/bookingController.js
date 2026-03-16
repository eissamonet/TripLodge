import Booking from "../models/Booking.js"
import Room from "../models/Room.js"


// function to check availability of room
const checkAvailability = async ({ checkInDate, checkOutDate, room })=>{
    try {
        const bookings = await Booking.find({
            room,
            checkInDate: {$lte: checkOutDate},
            checkOutDate: {$lte: checkInDate},
        });
        const isAvailable = bookings.length === 0;
        return isAvailable;
    } catch (error) {
        console.error(error.message);

    }
}

// api to check availability of room
// post /api/bookings/check-availability

export const checkAvailabilityAPI = async (req, res) =>{
    try {
      const { room, checkInDate, checkOutDate } = req.body;
      const isAvailable = await checkAvailability({ checkInDate, checkOutDate, room});
      res.json({ success: true, isAvailable})
    } catch (error) {
       res.json({ success: false, message: error.message})
    }
}

// api to create a new booking
// post /api/bookings/book

export const createBooking = async (req, res) =>{
    try {
       const { room, checkInDate, checkOutDate, guests} = req.body;
       const user = req.user._id;

       // before booking check availability
       const isAvailable = await checkAvailability({
          checkInDate,
          checkOutDate,
          room
       });

       if(!isAvailable){
        return res.json({ success: false, message: "Room is not availabile"})
       }
       // get totalPrice from room
       const roomData = await Room.findById(room).populate('hotel');
       let totalPrice = roomData.pricePerNight;

       // calculate totalprice based on nights

    } catch (error) {

    }
}