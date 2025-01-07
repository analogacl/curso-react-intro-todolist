import React from 'react';
function TodoList(props) {
    return (
        <ul className="">
            {props.children}
        </ul>
    );
}

export { TodoList };