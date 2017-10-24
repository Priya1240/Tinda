const express      = require('express'),
      session      = require('express-session'),
      passport     = require('passport'),
      path         = require('path'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      exphbs       = require('express-handlebars'),
      app          = express();

const mongoose   = require('mongoose'),
      MongoStore = require('connect-mongo')(session);

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



//Routes
app.get('/', (req, res) => {
  res.render('index');
});


//Starting server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
});
