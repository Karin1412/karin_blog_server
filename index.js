import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from './routers/posts.js'
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT||5500;

const URI = 'mongodb+srv://karin:syPlpBDbJoIUpGBU@cluster0.lwilyb2.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts)

mongoose.connect(URI, {useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('success');
        app.listen(PORT, ()=>{
            console.log(`Server is running on PORT: ${PORT}`);
        });
    }).catch(err => {
        console.log('err', err)
    })
