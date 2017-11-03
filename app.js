const express      = require('express'),
      session      = require('express-session'),
      passport     = require('passport'),
      path         = require('path'),
      logger       = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      exphbs       = require('express-handlebars'),
      app          = express();

const mongoose   = require('mongoose'),
      MongoStore = require('connect-mongo')(session);

//Logger Morgan
app.use(logger('dev'));

//Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


//Routes
app.get('/', (req, res) => {
  res.render('index');
});

//Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Database Config with mongoose
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(process.env.DATABASE);
}

let db = mongoose.connection;

//Handle Database(mongoose) errors.
db.on('error', (error) => console.log('Mongoose Error:', error));
db.on('error', (err) => console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`));


//If successfully connected to db through mongoose say so!
db.on('open', () => console.log('Mongoose connection has been successful!'));

//Starting server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
});
