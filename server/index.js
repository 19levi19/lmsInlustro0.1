// import db from "./././mongodb/connection.js";
const bodyparser = require('body-parser');
const express = require('express');
const db = require("./././mongodb/connection");
const bodyParser = require('body-parser');
const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  


  const startServer = async () => {
    try {
        connectDB(db);

        app.listen(3000, () =>
            console.log("Server started on port 3000 "),
        );
    } catch (error) {
        console.log(error);
    }
};











  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

