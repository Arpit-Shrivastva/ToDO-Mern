import React from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
    const handleComplete = () => {
        onUpdate(todo.id, { completed: !todo.completed });
    };

    return (
        <div>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={handleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default Todo;
