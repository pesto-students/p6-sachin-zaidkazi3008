const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
dotenv.config({path: './config/config.env'});

const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.json());

if(process.env.NODE_ENV=== 'development'){
    app.use(morgan('dev'))
};

const transactions  = require('./routes/transactions');
app.use('/api/v1/transactions', transactions);


app.listen(PORT, console.log(`server is in ${process.env.NODE_ENV} mode on port ${PORT}` ));