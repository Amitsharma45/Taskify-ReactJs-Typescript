import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './Routers/router';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/newts');
mongoose.connection.once('open',()=>{
    console.log('mogodb connected');
})
app.use('/api/v1',router)
app.get('/',(req,res)=>{
    res.send('hi i am ts app')
});

app.listen(3001, () => {
    console.log('Server is running at port 3001');
});

