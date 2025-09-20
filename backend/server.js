const express = require('express')
const cors = require('cors');
const env = require('dotenv')
const router = require('./routes/apiRoutes');
const handleLogs = require('./logger/logs');

env.config()

const app = express();
app.use(express.json());
app.use(cors());

app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
 
app.use(handleLogs)

app.use("/", router);

const Port = 5500

app.listen(process.env.PORT || Port, () => {
        console.log(`Server listening at ${process.env.Port || Port}`) 
});
