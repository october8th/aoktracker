const express = require("express");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
//set up routes folder with mongodb routes
//const routes = require("./routes"); 
const PORT = process.env.PORT || 3001;
const app = express();

//Configure body-parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add routes, both API and view
//app.use(routes);

/*
//Set up promises with mongoose
mongoose.Promise = global.Promise;
//Connect to the MongoDB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/aoktracker");
}

const db = mongoose.connection;

db.on("error", function(err) {
  console.log(`Connection Error: ${err}`);
});

db.once("open", function() {
  console.log("You are connected!");
});
*/

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
