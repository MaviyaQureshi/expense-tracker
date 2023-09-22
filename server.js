const express = require("express");
const transactions = require("./routes/transaction");
const connectDB = require("./config/db");

connectDB();

const app = express();
const MONGO_URI = "mongodb://localhost:27017/";

app.use(express.json());
app.use("/api/v1/transactions", transactions);

const port = 3000;

app.listen(port);
