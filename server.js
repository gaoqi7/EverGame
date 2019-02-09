const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require("dotenv").config();

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;


//Initiate our app
const app = express();
const PORT = process.env.PORT || 3001;

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ 
  secret: 'countdown-project', 
  cookie: { maxAge: 60000 }, 
  resave: false, 
  saveUninitialized: false 
}));


//Configure Mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/countdown-project",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
