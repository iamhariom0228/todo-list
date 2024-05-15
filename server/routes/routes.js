import express from "express";
import { addTodo, getAllTodos, toggleTodo, editTodo, deleteTodo } from "../controller/todo-controller.js";

const router = express.Router();


router.post('/todos', addTodo)
router.get('/todos', getAllTodos)
router.get('/todos/:id', toggleTodo);
router.put('/todos/:id', editTodo);
router.delete('/todos/:id', deleteTodo);



export default router;