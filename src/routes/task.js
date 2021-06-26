const express = require('express');
const router = express.Router();
const { checkSchema } = require("express-validator");


router.get('/', (req, res) => {
    res.send("coucou");
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send("reçu");
});

module.exports = router;