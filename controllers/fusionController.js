// We need this to build our post string
var https = require('https');
const querystring = require('query-string');
require('dotenv').config()

const  private_key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const  client_email = process.env.GOOGLE_CLIENT_EMAIL;
const key = private_key;
const { GoogleToken } = require('gtoken');
const gtoken = new GoogleToken({
  email: client_email,
  scope: ['https://www.googleapis.com/auth/fusiontables'], // or space-delimited string of scopes
  key: key
});




function postIt(token,myData){

  const postData = querystring.stringify({
  'sql': "INSERT INTO 1Vrh7Wg72U2Yo7_fFJhKHPMDrx_rY-BAtx7v3gdGo (Description, Location, Date) VALUES ('" + myData.title + "','" + myData.location + "','" + myData.date +"')"
});
  console.log(postData);
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

module.exports = {
    
    create: function(req, res) {
      //console.log(req.body);
        gtoken.getToken(function(err, token) {
        if (err) {
          console.log(err);
          return;
        }
        //console.log(token);
        postIt(token, req.body);  
      });
    }
};