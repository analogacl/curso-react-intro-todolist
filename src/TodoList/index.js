import React from 'react';
import './styles.css';
function TodoList(props) {
    return (
        <ul className="ul-list-todos">
            {props.children}
        </ul>
    );
}

export { TodoList };