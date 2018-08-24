import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import https from 'https';
// import fs from 'fs';
// import path from 'path';
import Promise from 'bluebird'
import bodyParser from 'body-parser';
import auth from './routes/auth';
import users from './routes/users';


dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('running on localhost 8080'));

// const server_options = {
//     cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
//     key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
// }