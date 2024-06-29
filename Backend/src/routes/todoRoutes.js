const todo_controller = require("../controllers/todoController");

module.exports = (app) => {
    app.post("/todo/api/v1/addTodo", todo_controller.addTodo);
    app.get("/todo/api/v1/getTodo", todo_controller.getAlltodo);
    app.put("/todo/api/v1/updateTodo", todo_controller.updateTodo);
    app.delete("/todo/api/v1/deleteTodo", todo_controller.deleteTodo);
}