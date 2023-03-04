const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', { useNewUrlParser: true,useUnifiedTopology: true }).then(() => { console.log('Database connected successfully ') }).catch((err) => { console.log('Error connecting to database ' + err) });

