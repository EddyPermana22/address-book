'use strict'

const express = require('express')

const contactController = require('../controllers/contact')

const Router = express.Router()

Router.post('/', contactController.addContact)
Router.get('/', contactController.getAllContact)
Router.get('/:contactID', contactController.getContactDetail)
Router.patch('/:contactID', contactController.editContact)
Router.delete('/:contactID', contactController.removeContact)

module.exports = Router