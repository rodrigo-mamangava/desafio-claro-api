import express from "express";
import routes from "./src/routes/mobileRoutes";
import mongoose from "mongoose";
import bodyParse from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

const dbUrl = "mongodb://rodrigobmuniz:passfortest@ds243798.mlab.com:43798/claro-api"

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, (err) => {
    console.log("mongo db connection", err );
});

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.use(cors({origin: 'http://localhost:4200'}));

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express server running ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});