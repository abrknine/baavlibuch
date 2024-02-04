/*const mongoose  =require('mongoose');


const connectDB= async ()=>{
    try{
        const  conn= await mongoose.connect(process.env.MONGO_URI,{
             

        });

        console.log( `mongoDB Connected:${conn}`);



    }
    catch(error){
        console.error(`Error:${error.message}`);
        process.exit();
    }
}

module.exports = connectDB

*/

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURI, {
            // Other options...
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;