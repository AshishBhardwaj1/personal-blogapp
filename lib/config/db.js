import mongoose from "mongoose"

export const ConnectDB =async()=>{
    await mongoose.connect('mongodb+srv://ash:PeRsOnAlBlOg@cluster0.z4mc6lq.mongodb.net/personalblogapp')
    console.log("db connected");
}