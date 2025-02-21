const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo db bağlantısı başarılı ${conn.connection.host}`);
    } catch (error) {
        console.log(`MangoDB bağlantısı başarısız ${error.message}`);
        
    }
};
module.exports=connectDB;