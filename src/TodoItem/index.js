import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onClickButton = () => {
    props.setOldTodoValue(props.text);
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <span
        className={`Icon Icon-edit ${props.completed && 'Icon-check--active'}`}
        onClick={onClickButton}
      >
        Edit
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
