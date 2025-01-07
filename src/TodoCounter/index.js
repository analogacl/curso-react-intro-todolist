import React from 'react';
import { TodoContext } from  '../TodoContext' ;
import './TodoCounter.css';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <div>
      {completedTodos !== totalTodos && (
        <h1>
          Has completado {completedTodos} de {totalTodos} tareas
        </h1>
      )}
      {completedTodos === totalTodos && totalTodos > 0 && (
        <h1>¡Felicidades! Has completado todas tus tareas. 🎉</h1>
      )}
    </div>
  );
}

export { TodoCounter };
