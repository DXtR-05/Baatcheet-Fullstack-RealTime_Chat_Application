import mongoose from "mongoose";

function connectDB(){
    mongoose.connect(process.env.MONGO_URI , {
    dbname :"chatappakash",
})
.then((c)=> console.log(`database connected with ${c.connection.host}`))
.catch((err)=>console.log(err));
}

export default connectDB;