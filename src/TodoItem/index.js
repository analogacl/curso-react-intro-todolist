import React from 'react';
function TodoItem(props) {
    return (

             <li className="list-group-item todoItem">
                 <div className="card text-bg-dark mb-3">
                     <div className="card-header text-end">
                     {props.completed ? <span className="badge text-bg-success">Completado</span> : <span className="badge text-bg-warning">Pendiente</span>}
                     <span
                         className={`Icon Icon-check ${props.completed && "Icon-check--active"}` }
                         
                     >
                     {props.completed ? <i class="bi bi-arrow-counterclockwise Pendiente" onClick={props.onUNComplete}></i> : <i class="bi bi-check2-circle Pendiente" onClick={props.onComplete}></i>
                     }

                     </span>
                     <span
                     className="btn btn-dark"
                     onClick={props.onDelete}
                     >X</span>
                     </div>
                     <div className="card-body">
                     <h4>{props.text}</h4>
                     </div>
                 </div>
             </li>



    )
}

export { TodoItem };