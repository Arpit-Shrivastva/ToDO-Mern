const todo_model = require('../models/todo');

exports.addTodo = async (req, res) => {
    const todoData = {
        title: req.body.title,
        description: req.body.description
    }

    try {
        //Insert into mongodb
        const todo = await todo_model.create(todoData);
        return res.status(201).send(todo);

    } catch (err) {
        console.log("Error while creating the todo", err)
        return res.status(500).send({
            message: "Error while creating the todo"
        })
    }

}

exports.getAlltodo = async (req, res) => {

    try {
        const todos = await todo_model.find({});
        return res.status(200).send(todos);

    } catch (err) {
        console.log("Error while getting the todo", err);
        return res.status(500).send({
            message: "Error while getting the todo"
        });
    }
}

exports.updateTodo = async (req, res) => {

    try {
        const todos = await todo_model.findOneAndUpdate(
            { title: req.body.title },

            {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            });

        const updatedTodo = await todo_model.findOne({ title: req.body.title });
        res.status(200).send({
            todo: updatedTodo.todo,
            description: updatedTodo.description
        });

    } catch (err) {
        console.log("Error while getting the todo", err);
        return res.status(500).send({
            message: "Error while getting the todo"
        });
    }
}

exports.deleteTodo = async (req, res) => {

    try {
        const todos = await todo_model.findOneAndDelete({ title: req.body.title });
        return res.status(200).send({
            message: "todo deleted successfully"
        });

    } catch (err) {
        console.log("Error while deleting the todo", err);
        return res.status(500).send({
            message: "Error while deleting the todo"
        });
    }
}