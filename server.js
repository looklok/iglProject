const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex:true,/* useUnifiedTopology: true*/}, (err) => {
    console.log(err);
});
const db = mongoose.connection;
db.once('open',function(){
    console.log('we\'ve connected successfully to the database')
});

const studentRoute = require('./routes/students');
app.use('/students',studentRoute);


app.listen(port, function() {
    console.log('the server is running on port ' + port);
});