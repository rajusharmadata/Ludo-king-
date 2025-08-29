import express from 'express'
import { config } from 'dotenv'
import { ConnectDb } from './config/db.js';


const App = express();

// setup config
config({
    path:'.env'
  })
// PORT
const PORT = 8080;

// Db connection
ConnectDb();

// Check for the app is running or not
App.listen(() => {
  console.log(`App is listen port at ${PORT}`);
})
