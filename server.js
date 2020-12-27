const express = require('express');

const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');

const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('', homeRouter);

app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Server listen at port ${port}`);
});
