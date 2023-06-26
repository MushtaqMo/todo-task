const Todo = require("../models/todo")

const getTodos = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Todo.find({})

    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        todos: items
    })
}

const getTodo = async (req, res) => {
    try {
        // get id from ':id' param from the route (the :id in the route path)
        const { id } = req.params
        // find todo with Model.findById()
        const todo = await Todo.findById(id)
        // response (res) with .json with the todo found
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const createTodo = async (req, res) => {
    try {
        // Get the data of the TODO from the request.body object
        const {text} = req.body

        // create new todo object with model
        const todoObject = new Todo({
            text
        })

        // await for it to be saved
        const newTodo = await todoObject.save()

        // respond with json()
        res.status(200).json(newTodo)
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}

const editTodo = async (req, res) => {
    try {
        // get id from ':id' param from the route
        const { id } = req.params


        // use mongoose model method findByIdAndUpdate
        const todoItem = await Todo.findByIdAndUpdate(id, req.body);

        // respond with json()
        res.status(200).json(todoItem)
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}

const deleteTodo = async (req, res) => {
    try {
        // get id from ':id' param from the route
        const { id } = req.params

        // use mongoose model method findByIdAndDelete
        await Todo.findByIdAndDelete(id);

        // respond with json()
        res.status(200).json({
            message: "successfully deleted todo"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}