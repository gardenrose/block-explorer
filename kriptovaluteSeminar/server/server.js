var bitcoin = require('bitcoin-rpc-api');
var express = require('express');
var app = express();

 
var node = {
  protocol: 'http',
  host: 'blockchain.oss.unist.hr',
  port: 8332,
  user: 'student',
  pass: '2B4DB3SmsM2B4DB3SmsM89QjgYFp89QjgYFp'
};

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
 
bitcoin.setup(node);
app.use('/', bitcoin.api); //Bind the middleware to any chosen url
console.log("Listening on port 5000");
app.listen(5000);