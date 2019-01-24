const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const auth = require('./auth.js')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.text());

mongoose.Promise = Promise;

const User = require('./models/User.js');
const Emp = require('./models/Employee.js');


app.get('/', (req, res) => {
    res.send('Welcome to the Employee Management System, To get access contact the admin');
});
app.get('/users', async (req, res) => {
    try {
        let users= await User.find({}, '-password -__v');
        res.send(users);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});
app.get('/register', async (req, res) => {
    try {
        let emps= await Emp.find({});
        res.send(emps);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
});
app.get('/empdetail/:id', async (req, res) => {
    // console.log(req.params.id);
    try {
        let emp = await Emp.findById(req.params.id);
        res.send(emp);
    } catch(error) {
        console.error(error);
         res.sendStatus(500);
    }
   
});
app.post('/register', auth.register);
app.post('/registerUser', auth.registerUser);
app.post('/login', auth.login);

mongoose.connect('mongodb://admin:admin123@ds161224.mlab.com:61224/userdatabase',{ useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('connected to Mongo');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));