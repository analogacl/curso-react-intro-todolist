import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 500);
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };


  // const defaultTodos = [
  //   { text: 'Una tarea por completar 1 ', completed: false},
  //   { text: 'Segunda tarea por completar 2', completed: true},
  //   { text: '3ra tarea por completar 3', completed: true},
  //   { text: 'IV tarea por completar 4', completed: false},
  //   { text: 'V tarea por completar 2', completed: true},
   
  //  ]
  //  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
   