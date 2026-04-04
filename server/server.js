require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const codeRoutes = require("./routes/codeRoutes");
app.use("/api/code", codeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});