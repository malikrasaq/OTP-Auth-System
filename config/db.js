const mongoose = require("mongoose");

const connectDB = () => { mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}) 
    .then(() => console.log("MongoDB connected"))
    .catch ((err) => console.log("MongoDB connection failed"));
}

module.exports = connectDB;
