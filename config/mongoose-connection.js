const mongoose = require("mongoose");
const config = require("config");
const dbgr =  require("debug") ("development:mongoose");


mongoose
.connect(`${config.get( "MONGODB_URI")}/scatch`)
.then(function(){

  // console.log(process.env.NODE_ENV);
  // $env:NODE_ENV="development"
  
  dbgr("connected")
})
.catch(function(err){
  dbgr(err);
})

module.exports = mongoose.connection;