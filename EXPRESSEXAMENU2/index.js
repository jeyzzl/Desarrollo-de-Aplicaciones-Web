const app = require('./app');
const exphbs = require('express-handlebars');
const moment = require('moment');
const {Client} = require('whatsapp-web.js');

const port = 80;

//Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Running config
app.listen(port, ()=> console.log('Express running'));



