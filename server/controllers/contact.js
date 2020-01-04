'use strict'

const modelContact = require('../models').Contact

class ContactController {

    static getAllContact = (req, res, next) => {
        modelContact.findAll()
            .then(contacts => {
                res.status(200).json({
                    code: 200,
                    status: "success",
                    contacts
                })
            })
            .catch(next)
    }

    static getContactDetail = (req, res, next) => {
        modelContact.findByPk(req.params.contactID)
            .then(contact => {
                if (!contact) {
                    next({
                        code: 404,
                        status: 'error',
                        message: `contact not found with ID ${req.params.contactID}`
                    })
                }
                else {
                    res.status(200).json({
                        code: 200,
                        status: 'success',
                        contact
                    })
                }
            })
            .catch(next)
    }

    static addContact = (req, res, next) => {
        const newContactData = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }
        modelContact.create(newContactData)
            .then((contact) => {
                res.status(201).json({
                    code: 201,
                    status: 'success',
                    contact
                })
            })
            .catch(next)
    }

    static editContact = (req, res, next) => {
        const editContactData = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }

        modelContact.update(
            editContactData,
            {
                returning: true,
                where: {
                    id: req.params.contactID
                }
            }
        )
            .then(([rowsUpdate, [contactUpdate]]) => {
                if (rowsUpdate != 1) {
                    next({
                        code: 404,
                        status: 'error',
                        message: `contact not found with ID ${req.params.contactID}`
                    })
                }
                else {
                    res.status(200).json({
                        code: 200,
                        status: 'success',
                        contact: contactUpdate
                    })
                }
            })
            .catch(next)
    }

    static removeContact = (req, res, next) => {
        console.log(req.params.contactID)
        modelContact.destroy({
            where: {
                id: req.params.contactID
            }
        })
            .then((affectedRow) => {
                if (affectedRow != 1) {
                    next({
                        code: 404,
                        status: 'error',
                        message: `contact not found with ID ${req.params.contactID}`
                    })
                }
                else {
                    res.status(200).json({
                        code: 200,
                        status: 'success',
                        message: `contact deleted!`
                    })
                }
            })
            .catch(next)
    }

}

module.exports = ContactController