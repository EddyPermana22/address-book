'use strict'

require('dotenv').config()

const express = require('express')
const cors = require('cors')

const port = process.env.PORT

const Router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'RESTFULL API SERVER READY',
    })
})

app.use(Router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})