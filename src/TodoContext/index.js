import React from 'react';
import { useLocalStorage } from './useLocalStorage';

    //   loading={loading}
    //   error={error}
    //   completedTodos={completedTodos}
    //   totalTodos={totalTodos}
    //   searchValue={searchValue}
    //   setSearchValue={setSearchValue}
    //   searchedTodos={searchedTodos}
    //   completarTodo={completarTodo}
    //   uncompletarTodo={uncompletarTodo}
    //   borrarTodo={borrarTodo}

const TodoContext = React.createContext()

function TodoProvider({children}) {
    const { 
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos=todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos= todos.length;
    
      const searchedTodos= todos.filter(
        (todo) => {
          const todoText = todo.text ? todo.text.toLowerCase() : '';
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
        }
      )
      const completarTodo = (text) => {
          const newTodos = [...todos];
          const todoIndex = newTodos.findIndex (
                (todo) => todo.text === text
          );
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
      };
      const uncompletarTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex (
              (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = false;
        saveTodos(newTodos);
    };
      const borrarTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex (
              (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });
      saveTodos(newTodos);
    }

    return (
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completarTodo,
        uncompletarTodo,
        borrarTodo,
        openModal,
        setOpenModal,
        addTodo,
  
    }}>
       {children}
    </TodoContext.Provider>
    )
}

    <><TodoContext.Provider></TodoContext.Provider><TodoContext.Consumer></TodoContext.Consumer></>

export { TodoContext, TodoProvider };