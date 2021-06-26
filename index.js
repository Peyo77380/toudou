const dotenv = require('dotenv');
const express = require("express");
const app = express();
const mongoose = require('mongoose');

dotenv.config();

//connection to db
mongoose.set('useFindAndModify', false);

mongoose
    .connect(
        process.env.DB_CONNECT, { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    .then( () => {
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        
        // Routing requests :
        app.use('/api/task', require('./src/routes/task'));
        
        const port = process.env.API_PORT ? process.env.API_PORT : 3000;
        // Launch server
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
    })
