
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

//Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Routes

app.get('/', (req, res) => {
  res.render('index');
});


//Starting server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`====🌎 🚈 🖥️ 📡===> App listening on PORT ${port} ✅`);
});
