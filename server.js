const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Rush001:Rush1234@cluster2.zzvzoeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDP')
    }
    catch(error){
        console.log('MongoDP Error:',error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening on http://${host}:${port}`);
});

app.use('/api', router);