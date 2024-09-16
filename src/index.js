const express = require('express');
const app = express();
const cookie_parser = require('cookie-parser');

require('./db/association.js');
const passport = require('./config/passport.config');
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const notificationRouter = require('./routes/notification.route');
const ApiResponse = require('./utils/ApiResponse');

const passportAuthenticate = require('./middlewares/JWT.middleware');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(cookie_parser());

app.use('/users', userRouter);
app.use('/notifications', notificationRouter);
app.use('/auth', authRouter);


app.get('/protected',passportAuthenticate(), (req, res) => {
    
// console.log ("req.user : ", req.user);
    res.status(200).send(new ApiResponse(req.user, 200));
});

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})


