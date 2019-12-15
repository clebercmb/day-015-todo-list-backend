const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {  
    if (err) 
        return console.log(err)                        
    // Make sure you add the database name and not the collection name  
    //const database2 = database.db("note-api") 
    const database2 = database.db("todo-api")
    require('./app/routes')(app, database2);
    
       
    app.listen(port, () => {    
        console.log('We are live on ' + port);  
    });              
})



/*

const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://apptodolist:IjNWNCO426ukhySy@cluster0-re92j.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "accounting_department";
 
 
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
 
app.listen(8000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("personnel");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

*/
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://apptodolist:<password>@cluster0-re92j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/