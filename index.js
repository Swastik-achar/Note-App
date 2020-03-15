const express = require("express");
const cors = require("cors");
const setUpDb = require("./config/database");
const router = require("./config/routes");
const app = express();
const port = 3040;

app.use(express.json());
app.use(cors());
app.use("/", router);
// db configuration
setUpDb();

app.listen(port, () => {
  console.log("listening on port", port);
});
