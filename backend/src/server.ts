import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './Routers/router';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
mongoose.connect("mongodb+srv://mongoadmin:amit1234@cluster0.ny6ohvf.mongodb.net/?retryWrites=true&w=majority");
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

