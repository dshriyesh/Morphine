import mongoose from 'mongoose'

const connectDB = async(req,res)=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URI}/Morphine`)
    
        console.log(`mongodb connected succesfully : ${response.connection.host}`)
    } catch (error) {
        console.log("MongoDb connetion error");
        throw new error
    }
}

export default connectDB