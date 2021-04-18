const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/profilePicture', (req, res) => {
    const img = fs.readFileSync('profile.jpg');
    res.writeHead(200, {
        'Content-Type': 'image/jpg'
    });
    res.end(img, 'binary');
});

app.listen(3050, () => {
    console.info('Server is listening on port 3050');
})