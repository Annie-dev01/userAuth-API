const express = require('express');
const  dotenv = require('dotenv'); 
const morgan = require('morgan');
const cors = require('cors');

const database = require('./config/database');
const googleRouter = require('./routes/auth');


dotenv.config();
database.connectDB();

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };

app.use(express.json())
app.use(morgan('combined'))
app.use(cors(corsOptions));
app.use('/users', require('./routes/users.routes'));
app.use('/task', require('./routes/tasks.routes'));
app.use("/auth", googleRouter);




module.exports = app;

