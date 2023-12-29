// sever.js
// where your node app starts


// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:request", (req, res) => {
  const param = req.params.request
  let unix = param
  console.log(new Date(param))
  if (validDate(req.params.request.toString())){
    unix = new Date(param).getTime()
    console.log(`unix: ${unix}`)
  }
  response = {
    "unix": unix, 
    "utc": new Date(unix).toLocaleDateString('en-GB', {dateStyle: 'long'})
  }
  res.json(response)
})



// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function validDate(input) {
  return ((new Date(input)).getTime() > 0) 
}