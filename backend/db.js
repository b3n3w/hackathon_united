const mongoose = require("mongoose");
const { config } = require('dotenv');


config(); //read env
const uri = process.env.DB_URI;


const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex : true
    });

    console.log("Connected to MongoDB Cloud Atlas - Cluster0 : united_skillserver");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
