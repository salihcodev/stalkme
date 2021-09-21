// import pks:
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from 'config';

// import utils:
// >>>> routers
import userRouter from './routes/user.router';
import tasksRouter from './routes/task.router';

// >>>> port that app is using:
const PORT = process.env.PORT || 5000;

// *******
//
//
// >>>> INITIALIZING EXPRESS APP:
const app: Express = express();

// *******
//
//
// >>>> APPLY THE MIDDLEWARES:
// use cors
app.use(cors());

// >>>> env vars configuration
const { db_connection_uri } = config.get('server');

// >>>> parsing the body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// HTTPs logger:
app.use(morgan('tiny'));

// *******
//
//
// >>>> SETUP ROUTES:
// initial route:
app.get('/', (req: Request, res: Response): void => {
    res.send(`Hello from the backend of your stalkme app`);
});

// >>>> use implemented routers:
app.use('/tasks', tasksRouter);
app.use('/user', userRouter);

// *******
//
//
// >>>> CONNECTING TO THE DATABASE:
const connectWithDB = async () => {
    try {
        await mongoose.connect(db_connection_uri, {});

        // >>>> listen to the app
        app.listen(PORT, () => {
            console.log(`Successfully connected to the DB :)`);
            console.log(`We are on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

// connection to the db elegantly:
(async (connectionTries = 5) => {
    while (connectionTries) {
        try {
            await connectWithDB();
            break;
        } catch (err) {
            console.error(err);
            connectionTries -= 1;

            // wait 5sec. until firing another new DB connecting try.
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
})();
