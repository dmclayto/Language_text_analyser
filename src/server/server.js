//end route
let projectData = {};



const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
//const fetch = require('node-fetch')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

//middleware
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors
const cors = require ('cors');
//const { request } = require('http');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/distfolder', function (req, res) {
  res.sendFile('dist/index.html')
// res.sendFile(path.resolve('src/client/views/index.html'))
})

// Setup Server

let port = process.env.PORT || 8081;
//if (port == null || port == "") {
// port = 8089;
//}
app.listen(port);


//get route
app.get('/all', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})



//get for testing
app.get('/test', function (req, res) {
    res.send({})
})



//get all the data from server
app.get ("/getData", (req,res)=>{
    res.send (projectData);
})



// post route
app.post("/postData", (req, res)=> {
 // console.log("server side data:", req.body);
 // let newEntry =  [{agreement: req.body.agreement}, {irony: req.body.irony}, {confidence: req.body.confidence} ];
  let newEntry =  [{agreement: req.body.agreement}, {confidence: req.body.confidence}, {irony: req.body.irony},{subjectivity: req.body.subjectivity}];
  
    projectData = newEntry;
  console.log(projectData);
  res.send(projectData);
})


module.exports = {app, server};