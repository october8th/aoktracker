const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//set up routes folder with mongodb routes
//const routes = require("./routes"); 
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

//Configure body-parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add routes, both API and view
app.use(routes);

//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAWFy0E2ch52woUGcHiQ27eq5tzZuhI4JE

// Require all models
//var db = require("./models");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aokTracker", {
  //useMongoClient: true
});

// We need this to build our post string
var https = require('https');
const querystring = require('query-string');

const  private_key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const  client_email = process.env.GOOGLE_CLIENT_EMAIL;
const key = private_key;
const { GoogleToken } = require('gtoken');
const gtoken = new GoogleToken({
  email: client_email,
  scope: ['https://www.googleapis.com/auth/fusiontables'], // or space-delimited string of scopes
  key: key
});


//https://developers.google.com/fusiontables/docs/v2/sql-reference

/*INSERT INTO <table_id> (<column_name> {, <column_name>}*) VALUES (<value> {, <value>}*)
{ {;INSERT INTO <table_id> (<column_name> {, <column_name>}*) VALUES (<value> {, <value>}*)}* ;}*/






gtoken.getToken(function(err, token) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(token);
  //postIt(token);  
});







function postIt(token){

  const postData = querystring.stringify({
  'sql': "INSERT INTO 1Vrh7Wg72U2Yo7_fFJhKHPMDrx_rY-BAtx7v3gdGo (Description, Location, Date) VALUES ('Someone gave complimented my hair!', '37.4352559 -77.6235046', '2018-04-13')"
});

const options = {
  hostname: 'www.googleapis.com',
  port: 443,
  path: '/fusiontables/v2/query',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();

}


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
