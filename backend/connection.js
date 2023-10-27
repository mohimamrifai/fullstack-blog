import mongoose from "mongoose";

async function connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mirland_blog');

        console.log('mongo db is connect')
    } catch (error) {
        console.log(error)
    }
}

export default connection;


