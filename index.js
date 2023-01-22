const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const openaiRoutes = require("./routes/openaiRoutes");

const app = express();

// body parsers middlerwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static  folder

app.use(express.static(path.join(__dirname, "public")));

// routes

app.use("/openai", openaiRoutes);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
