// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://vijayray143i:Vijayray@ac-obahpei-shard-00-00.a2t7nks.mongodb.net:27017,ac-obahpei-shard-00-01.a2t7nks.mongodb.net:27017,ac-obahpei-shard-00-02.a2t7nks.mongodb.net:27017/?ssl=true&replicaSet=atlas-8kjp15-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
