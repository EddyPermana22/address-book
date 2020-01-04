'use strict'

const express = require('express');
const Router = express.Router()

const contactRouter = require('./contact');

Router.use('/contacts',contactRouter)

module.exports = Router