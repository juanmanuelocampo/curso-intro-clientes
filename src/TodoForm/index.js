import React, { useEffect } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    oldTodoValue,
    setOldTodoValue,
    updateTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue){
      if(oldTodoValue.length > 0){
        updateTodo(oldTodoValue, newTodoValue);
      }else{
        addTodo(newTodoValue);
      }
      setOpenModal(false);
      setOldTodoValue('');
      return true;
    }else{
      alert("Atención: Debes completar el nombre!");
    }
  };

  useEffect(() => {
    //Si es modificación, asigno al campo el valor a editar
    oldTodoValue.length > 0 && setNewTodoValue(oldTodoValue);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe el nombre del nuevo cliente</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Nombre"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
