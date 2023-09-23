const path = require("path");
const express = require("express");
const transactions = require("./routes/transaction");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use("/api/v1/transactions", transactions);

const port = 7000;

app.listen(port);
