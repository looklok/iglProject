const app = require('./app.js');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex:true,/* useUnifiedTopology: true*/}, (err) => {
    console.log(err);
});
const db = mongoose.connection;
db.once('open',function(){
    console.log('we\'ve connected successfully to the database')
});


app.listen(port, function() {
    console.log('the server is running on port ' + port);
});