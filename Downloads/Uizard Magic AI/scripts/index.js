// write the express code
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('./config');
var port = process.env.PORT || 3000;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
