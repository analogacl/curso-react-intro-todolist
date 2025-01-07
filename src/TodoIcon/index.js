import React from 'react';
const iconTypes = {
    "check": <span className="badge text-bg-warning">Pendiente</span>,
    "pendiente": <span className="badge text-bg-warning">Pendiente</span>,
};

function TodoIcon ({ type }) {
    
    return (
        
        iconTypes[type] 
        
    )
}

export { TodoIcon };

{completed ? <span className="badge text-bg-warning">Pendiente</span> : <span className="badge text-bg-warning">Pendiente</span>}