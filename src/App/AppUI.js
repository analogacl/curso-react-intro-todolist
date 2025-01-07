import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodoContext } from '../TodoContext/index.js';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completarTodo,
    uncompletarTodo,
    borrarTodo,
    openModal,
    setOpenModal,
} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
     
                <TodoList>
                {loading && (
                  <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                  </>
                )}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length===0) && <EmptyTodos _/>}
                
                {
                    searchedTodos.map(todo => (
                      <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completarTodo(todo.text)}
                        onUNComplete={() => uncompletarTodo(todo.text)}
                        onDelete={() => borrarTodo(todo.text)}
                      />
                    ))}
                </TodoList>
        
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
      {openModal &&(
        <Modal
        setOpenModal={setOpenModal}
        >
          <TodoForm />
        </Modal>
      )}
    </React.Fragment> 
  );
}

export { AppUI };
