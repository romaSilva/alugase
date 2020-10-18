const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");

require("./database/connection");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
