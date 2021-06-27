const express = require('express');
const router = express.Router();
const { checkSchema } = require("express-validator");
const CategoryController = require('../controllers/CategoryController')
const CategoryRequests = require('../requests/CategoryRequests')

router.get('/', CategoryController.get);
router.get('/:id', CategoryController.getById);
router.post('/', checkSchema(CategoryRequests.validateStoring), CategoryController.store);
router.put('/:id', checkSchema(CategoryRequests.validateUpdate), CategoryController.update);
router.delete('/:id', CategoryController.delete);

module.exports = router;