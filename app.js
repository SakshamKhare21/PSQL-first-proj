const express = require('express');
const { homeRouter } = require('./routers/homeRouter');
const { newRouter } = require('./routers/newRouter');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use(express.urlencoded({extended: true}));
app.use('/new', newRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`THE SERVER IS ON AND IS LISTENING TO PORT ${port}`));