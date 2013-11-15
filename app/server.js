/* Requirements */
var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , mongoose = require('mongoose');

/* Initialization */
server.listen(3333);
mongoose.connect('mongodb://localhost/test');

/* Global variable setup */
var serverRoot = __dirname;
var Schema = mongoose.Schema;

/* DB Schemas */
var adminSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {type: [String], index: true},
    password: String,
    session_key: String    
});

var userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {type: [String], index: true},
    secret_key: String,
    has_voted: Boolean
});

/* Models */
var Admin = mongoose.model('Admin', adminSchema);
var User = mongoose.model('User', userSchema);

/* Get the server up and running */
app.use(express.static(serverRoot));
app.use(express.bodyParser());

app.get('/', function (req, res) {
    res.sendfile(serverRoot + '/index.html');
});
app.post('/authenticate', function(req, res) {
    var date = new Date();
    console.log("Authentication request received at " + date);  
    Admin.findOne({email: req.body.email}, function(err, result) {
        if(err) {
            console.log("Error: " + err);
            throw(err);
        }
        if(!result) {
            //response to client for user not found/invalid email address
            res.send(401, {invalid_email: true});
        }
        else {
            if(req.body.password !== result.password) {
                //response to client for invalid password
                res.send(401, {invalid_password: true});
            }
            else {
                res.cookie('admin_id', )
                res.send({we: "fuckingdidit"});
            }
        }
    });
});

