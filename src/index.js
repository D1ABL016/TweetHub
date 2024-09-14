const express = require('express');
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import { sequelize } from './db/estabilishConnection';
const userRouter = require('./routes/user.route');
const notificationRouter = require('./routes/notification.route');

app.use('/users', userRouter);
app.use('/notifications', notificationRouter);



app.listen(3000, () => {
    console.log("server started on port 3000");
})


