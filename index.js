const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const openaiRoutes = require("./routes/openaiRoutes");

const app = express();

// middlerwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/openai", openaiRoutes);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
