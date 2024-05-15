import Todo from "../model/Todo.js";



export const addTodo = async (req, res) => {
    try {
        console.log(req.body)
        const newTodo = new Todo({
            data: req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ 'createdAt': -1 });
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.status = !todo.status;
        await todo.save();
        res.status(200).json(todo);
      } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const editTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.data = req.body.data;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(todo); 
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}