const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');


const getRoutes = require('./routes/home');

app.set('view engine', 'ejs' );
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.use(express.static('public'));

app.use('/', getRoutes);




app.listen(process.env.PORT || 5500);