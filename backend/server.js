const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const acctRoutes = express.Router();
const PORT = 4000;

//GET, POST, PUT, DELETE routes to the API will go here

acctRoutes.route('/').get(function(req,res)){
    
}
