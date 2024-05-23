import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT",
    }).then(()=>{
        console.log("connected to database successfully1!");
    })
    .catch((err) => {
        console.error('Some error occured while connecting to database! ${err}');
    });
};

