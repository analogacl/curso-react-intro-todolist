import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal( { children, setOpenModal } ) {

    return ReactDOM.createPortal(
        <div className="Modal">
            
            <div className="Modal__container">
            <div className="Modal__header">
                <button 
                className='cerrarModal'
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                  }
                ><strong>X</strong></button>
            </div>
                { children }
            </div>
        </div>,
        document.getElementById('Modal')
    );
}

export { Modal };