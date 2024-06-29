// src/api.js
const API_BASE_URL = 'http://localhost:8888/todo/api/v1';

export const fetchTodos = async () => {
    const response = await fetch(`${API_BASE_URL}/getTodo`);
    return response.json();
};

export const createTodo = async (todo) => {
    const response = await fetch(`${API_BASE_URL}/addTodo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    return response.json();
};

export const updateTodo = async (id, updatedTodo) => {
    const response = await fetch(`${API_BASE_URL}/updateTodo`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    });
    return response.json();
};

export const deleteTodo = async (id) => {
    await fetch(`${API_BASE_URL}/deleteTodo`, {
        method: 'DELETE'
    });
};
