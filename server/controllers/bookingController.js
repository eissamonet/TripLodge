import Booking from "../models/Booking.js"


// function to check availability of room
const checkAvailability = async ({ checkInDate, checkOutDate, room})=>{
    try {
        const bookings = await Booking.find({
            room,
            checkInDate: {$lte: checkOutDate},
            checkOutDate: {$lte: checkInDate},
        })
    } catch (error) {

    }
}