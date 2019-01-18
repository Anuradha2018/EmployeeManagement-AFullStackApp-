const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
let User = require('./models/User.js')  

app.get('/', (req, res) => {
    res.send('User is ABC');
});


app.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, result) => {
        if(err) {
            console.log('saving user error');
        }
        
            res.sendStatus(200);
    });
});

mongoose.connect('mongodb://admin:admin123@ds161224.mlab.com:61224/userdatabase',{ useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('connected to Mongo');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));