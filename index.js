const express = require("express");
const cors = require("cors");
const router = require("./src/routes")
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use('/api',router)
require('./src/config/db')
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))