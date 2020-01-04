'use strict'

const errorHandler = (err, req, res, next) => {
    // res.status(500).json({
    //     code:500,
    //     message: "Internal Server Error",
    //     error: err
    // })
    res.send(err)
}

module.exports = errorHandler