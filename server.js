
'use strict';
var express = require('express');
const json2html = require('node-json2html');
var bodyParser = require('body-parser');
var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




var fs = require("fs");'use strict';
var events = []

app.post('/addEvent', function (req, res) {
    // First read existing users.
    //fs.readFile( __dirname + "/data/" + "events.json", 'utf8', function (err, data) {'use strict';
       if (events.length >= 10) {
        events=events.reverse()
        events.shift()
        events=events.reverse()
      };

       events.unshift(req.body);

     //  let json = JSON.stringify(obj);
      // fs.writeFile('myjsonfile.json', json);var bodyParser = require('body-parser');

       res.send("Data end");
       
    //});
 })
 'use strict';

app.get('/listevents', function (req, res) {
    
   //fs.readFile( __dirname + "/data/" + "events.json", 'utf8', function (err, data) {
    var data = JSON.stringify(events);
    console.log(data)
    let template = [
        {'<>':'h1','text':'${type}'},
        {'<>':'ul','html':[
            {'<>':'strong','text':'${time}'},
            {'<>':'li','obj':function(){return(this.data.values)},'html':[
                {'<>':'span','text':'${resource}'},
                {'<>':'strong','text':'(${value})'}
            ]}
        ]}
    ];
    let html=json2html.render(data,template);
    let htmlBody ='<!DOCTYPE html>' + '<html><head></head><body> ' + html + '</body></html>';

    console.log(htmlBody)
    res.end(htmlBody);
//});
})

// Constants
const PORT = 9198;
const HOST = '0.0.0.0';

var server = app.listen(PORT,HOST, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(`Running on http://${HOST}:${PORT}`);
})
