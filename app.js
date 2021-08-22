require('dotenv').config();
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const {MongoDB} = require('./databases/schema');

MongoDB();

const homeRoutes = require('./routes/home');
const postRoutes = require('./routes/posts');

app.set('view engine', 'ejs' );
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.use('/', homeRoutes);
app.use('/post', postRoutes);


app.listen(process.env.PORT || 5500);