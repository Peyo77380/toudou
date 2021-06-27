const Category = require("../models/Category");
const response = require("../helpers/responses");

module.exports = {
    get: async (req, res) =>  {
        Category.find({}, (err, categories) => {
            err ? response.sendError(err, res) : response.sendSuccessData(categories, res)
        });
    },
    getById: async (req, res) => {
        Category.findById(req.params.id, callback = (err, cat) => {
            if (!cat) {
                return response.sendError("Nothing found at this Id", res, code = "404");
            }
            err ? response.sendError(err, res) : response.sendSuccessData(cat, res);
        });       
    },
    store: async (req, res) => {
        const cat = new Category(req.body)

        await cat.save().catch(err => response.sendError(err, res));
        response.sendSuccessData(cat, res, code=201);
    },
    update: async (req, res) => {
        Category.findByIdAndUpdate(req.params.id, req.body, (err, cat) => {
            err ? response.sendError(err, res) : response.sendSuccessData(cat, res)
        });
    },
    delete: async (req, res) => {
        Category.findByIdAndDelete(req.params.id, {}, (err, cat) => {
            err ? response.sendError(err, res) : response.sendSuccessWithoutData(res, "deleted")
        });
    }

}
