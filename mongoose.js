const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/panchayat_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to mongo db "));
db.once('open',function(){
    console.log('connected to the server :: Mongo db ');
});
module.exports=db;