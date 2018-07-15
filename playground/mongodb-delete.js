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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat brains'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete', err);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'something to do'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete', err);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat brains'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    // client.close();
});