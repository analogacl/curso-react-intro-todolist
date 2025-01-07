import React from 'react';
// import './TodosLoading.css';

function TodosLoading() {
  return (



<div className="card placeholder-glow mb-3" aria-hidden="true">
  <div className="card-header d-flex justify-content-between align-items-center">
    <span className="badge bg-primary placeholder col-2"></span>
    <span className="placeholder col-3"></span>
    <button className="btn btn-sm btn-secondary disabled placeholder col-1"></button>
  </div>
  <div className="card-body">
    <h4 className="placeholder-glow">
      <span className="placeholder col-6"></span>
    </h4>
    <p className="placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
    </p>
  </div>
</div>


  );
}

export { TodosLoading };
