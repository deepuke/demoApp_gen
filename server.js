const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

//Set the public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.get('/profilePicture', (req, res) => {
    const img = fs.readFileSync('profile.jpg');
    res.writeHead(200, {
        'Content-Type': 'image/jpg'
    });
    res.end(img, 'binary');
});

app.get('/get-profile', (req, res) => {
    var response = res;
    MongoClient.connect('mongodb://admin:password@localhost:27017', (err, client) => {
        if (err) throw err;

        const db = client.db('user-account');
        const query = { userid: 1 };
        db.collection('users').findOne(query, (err, result) => {
            if (err) throw err;

            client.close();
            response.send(result);
        })
    })
});
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
app.get('/update-profile', (req, res) => {
    let userObj = req.body;
    MongoClient.connect('mongodb://admin:password@localhost:27017', mongoClientOptions, function(err, client) {
        if (err) throw err;

        let db = client.db(databaseName);
        userObj['userid'] = 1;

        let myquery = { userid: 1 };
        let newvalues = { $set: userObj };

        db.collection("users").updateOne(myquery, newvalues, { upsert: true }, function(err, res) {
            if (err) throw err;
            client.close();
        });

    });
    // Send response
    res.send(userObj);

});


app.listen(3050, () => {
    console.info('Server is listening on port 3050');
})