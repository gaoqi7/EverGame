const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

require("dotenv").config();

const routes = require('./routes');

//Initiate our app
const app = express();
const PORT = process.env.PORT || 3001;

//Configure our app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
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

// Configure Passport
const localSignupStrategy = require('./config/local-signup');
const localLoginStrategy = require('./config/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Configure Mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/countdown-project",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

//Routes
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
