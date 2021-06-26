const express = require('express');

module.exports = {
    sendSuccessData: (datas, res, status = "success", code = 200) => {
        return res.status(code).send({
            time: Date.now(),
            status,
            datas
        });
    },
    sendSuccessWithoutData: (res, status = "success", code = 204) => {
        return res.status(code).send({
            time: Date.now(),
            status,
            datas
        });
    },
    sendError: (err, res, status = "error", code = 500) => {
        return res.status(code).send({
            time: Date.now(),
            status,
            errorDetails: err
        });
    }
} 