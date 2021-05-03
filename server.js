const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

// connect to DB
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB CONNECTION SUCCESSFUL!'))
    .catch(err => console.log('DB CONNECTION FAILED', err));

// app middleware
app.use(express.json());
app.use(morgan('dev'));
if(process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `http://localhost:3000` }));
}

// middleware
app.use('/api/', authRoutes);
app.use('/api/user', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port} - ${process.env.NODE_ENV}`)
});