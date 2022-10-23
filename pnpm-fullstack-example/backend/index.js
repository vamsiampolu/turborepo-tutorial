const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const validation = require("validation");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const todoList = [
    {
        text: "Feed the cat",
    },
    {
        text: "Go to work",
    },
    {
        text: "Have a delicious ice cream",
    },
];

app.post("/todo", (req, res) => {

    const todoItem = req.body.todoItem;
    const result = validation.validateTodo(todoItem)
    if (!result.valid) {
        res.status(400).json(result);
        return;
    }

    //
    // The todo item is valid, add it to the todo list.
    //
    todoList.push(todoItem);
    res.sendStatus(200);
});

app.get("/todos", (req, res) => {
    res.json({
        todoList: todoList,
    });
})

app.listen(port, () => {
    console.log(`Todo list app listening on port ${port}`);
});
