const mongoose = require('mongoose');

const URI='mongodb+srv://xyz:12345@cluster0.xhz0l.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;