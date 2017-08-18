var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var mangojs = require('mongojs');
var bodyParser = require('body-parser');

//which mongo db and collection are we going to use
var db= mangojs('research', ['research']);

var database;
//-------------------------
// for parsing the body for the data
app.use(bodyParser.json());

//----------------------------------
// matching port 9000 and 5000
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT, GET, POST ,DELETE, OPTIONS");
    next();
})

//----------------------------------
// getting data from db and send it tp the front end to show on the html file
	app.get('/api/research', function(req,res){

		console.log("I recived a GET request!");
		db.research.find(function(err,docs){
			console.log(docs); // make sure we have recived the data
			res.json(docs);// send the data back to the controller 
		});
	});
//----------------------------------
// listen data front end and save it to the database 
	app.post('/api/research', function(req,res){
		console.log(req.body); // show the inserted data to consol, for server to parse the body and we installed body-parser which we required on the top
		// insert data to db
		db.research.insert(req.body, function(err,doc){
			res.json(doc);
		})
	});
//----------------------------------
// getting the delete request from controller and delete it from server
	app.delete('/api/research/:id', function(req, res){
		var id = req.params.id; //  get the value of the id from url
		console.log(id);// show which reaserch with id is gooing to be deleted
		db.research.remove({_id: mangojs.ObjectId(id)}, function(err,doc){
			res.json(doc); // send back the item that we removed from db to the admin controller
		})
	});
//----------------------------------
// getting the update request from controller and delete it from server
	app.get('/api/research/:id', function(req,res){
		var id = req.params.id; //  get the value of the id from url
		console.log(id);// show which reaserch with id is gooing to be edited
		db.research.findOne({_id: mangojs.ObjectId(id)}, function(err,doc){
			res.json(doc); // send back the item that we removed from db to the admin controller
		})
		
	});
//----------------------------------
// update the reaserch fild in the 
	app.put('/api/research/:id', function(req,res){
		//console.log(id);
		var id = req.params.id; //  get the value of the id from url
		console.log(req.body.Name);
		db.research.findAndModify({query: {_id: mangojs.ObjectId(id)},// select the research that we want to modify
			update: {$set: {Id: req.body.Id, PicUrl: req.body.PicUrl, Name: req.body.Name, People: req.body.People, Email: req.body.Email, Content: req.body.Content }},
		new: true}, function(err,doc){
			res.json(doc);
		});
	});

		
//---------------------------------
// coonecting mongo
mongo.connect("mongodb://localhost:27017/test", function(err,db){
    if(!err){
        console.log("we are connected to mongo");
    }
})

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port)
})
