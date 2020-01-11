require('dotenv').config();

var express = require('express');
var app = express();
var workcontroller = require('./controllers/workcontroller');
var usercontroller = require('./controllers/usercontroller');
var sequelize= require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/api/user', user);

app.use(require('./middleware/validate-session'));
app.use('/authinfo', workInfo);


// app.use('/auth', usercontroller);
// app.use('/pie', piecontroller);

app.get('/', (req, res) => res.render('app'));

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});