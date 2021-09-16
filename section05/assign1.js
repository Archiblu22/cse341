const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('First');
//     next();
// });

// app.use('/users', (req, res, next) => {
//     console.log('second');
//     res.send('<h2>finished</h2>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>This is the "Users" page</h1>');
})

app.use('/' , (req, res, next) => {
    console.log('Needs to go last');
    res.send('<h1>Welcome to Express!</h1>');
})

app.listen(3000);
