// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookroutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("working");
})
// Routes
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
