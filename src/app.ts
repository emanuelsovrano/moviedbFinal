import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as mongodb from 'mongodb';
import * as assert from 'assert';
import { MongoError, MongoCallback, Collection } from 'mongodb';
import { Request, Response, NextFunction } from 'express';

const app = express();
const MongoClient = mongodb.MongoClient;
// Connection URL
let url = "mongodb://localhost:27017/moviesBE";

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req:Request, res:Response, next:NextFunction) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");                                                                                                                                                                                                                                
    next();
});

// Connect to the server and open database "MoviesDB"
// Call methods to insert find, update and delete documents
MongoClient.connect(url, (err: MongoError, db : any) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    let database = db.db("MoviesDB");

    insertDocuments(database, function() {
        findAll(database, function () {
            updateDocument(database, function () {
                removeDocument(database, function () {
                    db.close();
                });
            });
        });
    });
});

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!");
});

app.get("/sample", (req:Request, res:Response) => {
    let response = {message: "you called /sample with GET operation"};
    res.send(response);
});

app.post("/sample", (req:Request, res:Response) => {
    console.log("Request body: ", req.body);
    let response = {message: "you called /sample with POST operation", originData: req.body};
    res.send(response);
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!")
});

let insertDocuments = (db : any, callback : any) => {
    // Get the documents collection
    let collection:Collection = db.collection("documents");
    // Insert some documents
    collection.insertMany([ {a : 1}, {a : 2}, {a : 3} ],
        function(err : MongoError, result : any) {
            assert.equal(err, null);
            assert.equal(3, result.result.n); // result = the document
            assert.equal(3, result.ops.length); // ops = the inserted docs
            console.log("Inserted 3 documents into the collection");
            callback(result); // Call callback function
        });
};

let findAll = (db : any, callback : any) => {
    // Get the documents collection
    let collection:Collection = db.collection("documents");
    // Find some documents
    collection.find({}).toArray((err:MongoError, docs:any) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs); // Call callback function
    });
};

let updateDocument = (db:any, callback:any) => {
    // Get the documents collection
    let collection:Collection = db.collection("documents");
    // Update first document where a is 2, set b equal to 1
    // $set updates existing attributes or inserts new attributes
    collection.updateOne({ a : 2 } , { $set: { b : 1 } },
        (err:MongoError, result:any) => {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated document with field a equal 2");
            callback(result);
        });
};

let removeDocument = (db:any, callback:any) => {
    // Get the documents collection
    let collection:Collection = db.collection("documents");
    // Delete first document where a is 3
    collection.deleteOne({ a : 3 }, (err:MongoError, result:any) => {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed document with field a equal 3");
        callback(result);
    });
};
// Commands:
// node app.js
// mongod --dbpath=C:\Users\Linda\Dev\Data\Movies