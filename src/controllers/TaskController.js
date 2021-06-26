const Task = require("../models/Task");
const response = require("../helpers/responses");

module.exports = {
    get: async (req, res) =>  {
        Task.find({}, (err, tasks) => {
            err ? response.sendError(err, res) : response.sendSuccessData(tasks, res)
        });
    },
    getById: async (req, res) => {
        Task.findById(req.params.id, callback = (err, task) => {
            if (!task) {
                return response.sendError("Nothing found at this Id", res, code = "404");
            }
            err ? response.sendError(err, res) : response.sendSuccessData(task, res);
        });       
    },
    post: async (req, res) => {
        const task = new Task(req.body)

        await task.save().catch(err => response.sendError(err, res));
        response.sendSuccessData(task, res, code=201);
    },
    update: async (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body, (err, task) => {
            err ? response.sendError(err, res) : response.sendSuccessData(task, res)
        });
    },
    delete: async (req, res) => {
        Task.findByIdAndDelete(req.params.id, {}, (err, task) => {
            err ? response.sendError(err, res) : response.sendSuccessWithoutData(res, "deleted")
        });
    }

}
