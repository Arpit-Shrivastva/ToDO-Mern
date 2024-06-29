const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const server_config = require("./configs/serverConfig")
const db_config = require("./configs/dbConfig")

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
    console.log('Error while connecting to the mongoDB');
});

db.once("open", () => {
    console.log("Connected to MongoDB");
})

/**
* Stich the route to the server
 */

require("./routes/todoRoutes")(app);

app.listen(server_config.PORT, () => {
    console.log("Server started at port num : ", server_config.PORT);
})