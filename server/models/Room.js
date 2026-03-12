import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

}, {timestamps: true});

const Room = mongoose.model("Room", roomSchemaSchema);

export default Room;