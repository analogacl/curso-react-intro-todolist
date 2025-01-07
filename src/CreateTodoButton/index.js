import React from 'react';
function CreateTodoButton( {setOpenModal}) {
    return (
      <button
      className="btn btn-warning fixed-bottom"
      onClick={
        () => {
            setOpenModal(state => !state);
        }
      }
      >Agregar una  tarea</button>
    )
  }
  export { CreateTodoButton }