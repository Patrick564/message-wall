const express = require('express');
const passport = require('passport');
const session = require('express-session');

const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secretTest',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('', homeRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server listen at port ${port}`);
});
