const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();
//useUnifiedTopology: true 
mongoose.connect(process.env.MONGO_URL,{userNewUrlParser: true },()=>{
    console.log('Connected to mongodb');
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('conmmon'));

app.use(userRoute);
app.use(authRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to homepage");
});





app.listen(8800,()=>{
    console.log('server is running at port 8800');
}
);