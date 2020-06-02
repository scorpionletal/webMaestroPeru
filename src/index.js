// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
var express =require('./controllers/app').express;
var app = require('./controllers/app').app;
var server = require('./controllers/app').server;

var flash = require('connect-flash');


var path = require('path');

//require('dotenv').config();

const bodyParser = require('body-parser');

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(flash());

app.set('port', process.env.PORT || 3000);
//app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//app.use(expressLayouts);
//Routes
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use(require('./routes/mainroute'));

//static files

//starting the server

server.listen(app.get('port'),()=>{
    console.log('servidor corriendo por el puerto:'+app.get('port'));
});
