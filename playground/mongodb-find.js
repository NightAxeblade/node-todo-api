// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring super-cool

// var obj = new ObjectID;
// console.log(obj);
//this will print the object id directly, we get the object id from mongodb 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Todos').find({
            _id: new ObjectID('5b4a0cb4ea499e5f64132213')
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    // client.close();
});