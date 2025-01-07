import React from 'react';
import { TodoIcon } from '.';

function DeleteIcon() 
{
    return (
        <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    );
}

export  { DeleteIcon };