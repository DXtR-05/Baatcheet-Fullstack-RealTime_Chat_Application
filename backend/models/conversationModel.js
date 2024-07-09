import mongoose from "mongoose";
//this conversation model will have an array of participants and an array of messages
const conversationModel = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }]
},{timestamps:true});
export const Conversation = mongoose.model("Conversation", conversationModel);