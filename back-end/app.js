const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config.json');

const app = express();
const port = 8081;
// const port = process.env.PORT || 3338;
const url = config.db_server;

//for establishing the connection with mongoDB
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>{
    console.log('connected..')
})

//for removing the CORS error
app.use(express.json(), cors())

const memeRouter = require('./routes/memes')
app.use('/memes',memeRouter)

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})


