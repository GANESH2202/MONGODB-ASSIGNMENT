const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/FlightDetails" ,{
     useNewurlParser:true,
     useUnifiedTopology:true
}).then(() => {
    console.log("connection done...");
}).catch((err) => {
    console.log(err);
})


// const MongoClient = mongodb.MongoClient;
// const url = "mongodb://127.0.0.1:27017";
// const database ="flight details";
// const client = new MongoClient(url);

// if(Client){
//      client.connect();
//      console.log("connected");
// }else{
//      console.log("failed to connect")
//      process.exit();
// }