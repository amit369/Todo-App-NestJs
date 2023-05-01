import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import TodoItem from './TodoItem';
import { clearList } from '../redux/features/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  let bg = {
    backgroundColor: 'white',
    color: 'black'
  }

  const list = useSelector((state: RootState) => state.todo);

  const handleClear = () => {
    dispatch(clearList());
  }

  if (list.length === 0) {
    return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  }

  return (
    <div className='todo-items-container'>
      <div className='container-fluid'>
        <ul className='list-group' style={bg}>
          {list.map((item) => {
            return <TodoItem key={item['id']} item={item} />;
          })}
        </ul>

        <button onClick={handleClear} className="btn btn-primary">
          CLEAR LIST
        </button>
      </div>
    </div>
  )
}

export default TodoList;