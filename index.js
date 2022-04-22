const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routers/userRoute")

connectDB();
const app = express();

app.use(express.json());
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
