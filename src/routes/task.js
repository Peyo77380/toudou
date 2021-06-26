const express = require('express');
const router = express.Router();
const { checkSchema } = require("express-validator");
const taskController = require('../controllers/TaskController')


router.get('/', taskController.get);

router.post('/', taskController.post);

module.exports = router;