import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api';
import Todo from './todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const loadTodos = async () => {
            const todos = await fetchTodos();
            setTodos(todos);
        };
        loadTodos();
    }, []);

    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            const todo = await createTodo({ text: newTodo, completed: false });
            setTodos([...todos, todo]);
            setNewTodo('');
        }
    };

    const handleUpdateTodo = async (id, updatedTodo) => {
        const todo = await updateTodo(id, updatedTodo);
        setTodos(todos.map(t => (t.id === id ? todo : t)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onUpdate={handleUpdateTodo}
                    onDelete={handleDeleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
