import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    // se crea un estado local y no global para detectar el textarea
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); 
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };


    return (
        <form onSubmit={onSubmit}>

            <div className='form-group'>
                <label for="todoDetail">Escribe tu nueva tarea</label>
            </div>
            <div className='form-group'>
                <textarea
                id = "todoDetail"
                plaeholder="Escribir un libro"
                className="todoDetail"
                value={newTodoValue}
                onChange={onChange}
                />
            </div>
            <button
            type="submit" 
            className='btn btn-primary' 
            >Crear tarea</button>
        </form>
    )
}
export { TodoForm }