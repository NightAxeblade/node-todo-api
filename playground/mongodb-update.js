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

    //findOneandUpdateOne
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b4b4efa440692b900e1bfa0')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find and delete', err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b4b49daecf66155d4d16024')
    }, {
        $set: {
            name: 'Uddhav Navneeth'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to find and delete', err);
    });

    // client.close();
});