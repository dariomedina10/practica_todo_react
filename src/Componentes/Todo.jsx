import React from 'react';

function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked />
        <label className="todo-label" htmlFor="todo-0">
          Comer
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Editar <span className="visually-hidden">Comer</span>
        </button>
        <button type="button" className="btn btn__danger">
          Borrar <span className="visually-hidden">Comer</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;