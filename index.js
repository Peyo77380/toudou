const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));


// Routing requests :
app.use('/api/task', require('./src/routes/task'));


// Launch server
app.listen(3000, () => console.log("Server running"));