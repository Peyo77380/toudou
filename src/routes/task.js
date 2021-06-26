const express = require('express');
const router = express.Router();
const { checkSchema } = require("express-validator");
const taskController = require('../controllers/TaskController')


router.get('/', taskController.get);
router.get('/:id', taskController.getById);
router.post('/', taskController.post);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router;