var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./server/db/mongoose');
var {Todo} = require('./server/models/todo');
var {User} = require('./server/models/user');

var app = express();

app.use(bodyParser.json());

// app.post('/todos', (req, res) => {
//     var todo = new Todo({
//         text: req.body.text
//     });
//     todo.save().then((doc) => {
//         res.status(200).send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

app.post('/user', (req, res) => {
    var user = new User({
        name: req.body.name
    });

    user.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
})