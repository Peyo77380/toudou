const express = require('express');
const router = express.Router();
const { checkSchema } = require("express-validator");
const taskController = require('../controllers/TaskController')
const taskRequests = require('../requests/TaskRequests')

router.get('/', taskController.get);
router.get('/:id', taskController.getById);
router.post('/', checkSchema(taskRequests.validateStoring), taskController.store);
router.put('/:id', checkSchema(taskRequests.validateUpdate), taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router;