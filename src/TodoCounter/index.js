import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">La cantidad de clientes activos son {completedTodos} del {totalTodos} total de registrados.</h2>
  );
}

export { TodoCounter };
