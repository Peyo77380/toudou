const Task = require("../models/Task");

module.exports = {
    get: async (req, res) =>  {
        res.send("controller get");
    },
    post: async (req, res) => {
        const task = new Task(req.body)

        try {
            await task.save();
            res.send("saved")
        } catch (error) {
            res.send(error);
        }
    },
}
