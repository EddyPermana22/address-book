'use strict'

const modelContact = require('../models/contact');

class ContactController {

    static getAllContact = (req, res, next) => {
        
    }

    static getContactDetail = (req, res, next) => {
        res.send(`Contact Detail with ID ${req.params.contactID}`)
    }

    static addContact = (req, res, next) => {
        res.send('add New Contact')
    }

    static editContact = (req, res, next) => {
        res.send(`Edit Contact Detail with ID ${req.params.contactID}`)
    }

    static removeContact = (req, res, next) => {
        res.send(`Remove Contact with ID ${req.params.contactID}`)
    }

}

module.exports = ContactController