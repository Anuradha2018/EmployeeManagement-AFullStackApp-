const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let jwt = require('jwt-simple');
let bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.text());

mongoose.Promise = Promise;

let User = require('./models/User.js')  
let Emp = require('./models/Employee.js') 

app.get('/', (req, res) => {
    res.send('User is ABC');
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




/*app.post('/register', (req, res) => {
    let empData = req.body;
    let emp = new Emp(empData);
    emp.save((err, result) => {
        if(err) {
            console.log('saving emp error');
        }
        
            res.sendStatus(200);
    });
});
app.post('/registerUser', (req, res) =>{
    let userData = req.body;
    let user = new User(userData);
    user.save((err, result) => {
        if(err) {
            console.log('saving user error');
        }
        res.sendStatus(200);
    })
})
app.post('/login', async (req, res) => {
    let loginData = req.body;
    // let user = new User(userData);
    let user = await User.findOne({email: loginData.email});


    if(!user) 
    return res.status(401).send({message:'Email or Password invalid'});
    
    
    bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if(!isMatch) {
                return res.status(401).send({message:'Email or Password invalid'});
            }
           let payload = {}

            let token = jwt.encode(payload, '123');
            // console.log(token);
            res.status(200).send({token});
        })
});*/

mongoose.connect('mongodb://admin:admin123@ds161224.mlab.com:61224/userdatabase',{ useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('connected to Mongo');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));