import React, { useState } from 'react';
import { removeItem, editItem } from '../redux/features/todoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import { TextField } from '@material-ui/core';

const TodoItem = ({ item }: any) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(item.title);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const myRef = React.useRef(null);
  // var data = useSelector( (state ) => { return state.id = item.id} );
  const handleRemove = (e: any): void => {
    e.preventDefault();
    dispatch(removeItem({ id: item.id }));
  }
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  const editfunction = (): void => {
    // e.preventDefault();
    dispatch(editItem({ id: item.id, newTitle: data }));
    setOpen(false);
  }
  return (
    <div className="item-container">
      <p className=" text-text" style={{ marginBottom: 0 }}>
        {/* <input
      value={item.title}
      
    /> */}

        <TextField value={item.title} variant='outlined'  className='text-field'/>
      </p>
      <div className='action-container'>
        <i onClick={handleRemove} className="fas fa-times text-danger" style={{fontSize : '30px' , padding: '15px'}}></i>
        <button onClick={onOpenModal}>Edit</button>
        <Modal open={open} onClose={onCloseModal}    center container={myRef.current}>
          <div>

            <label>Title:</label>
            <input type="text" value={data} onChange={(e) => { setData(e.target.value) }} /><br></br>
            {/* <input type="text" value={data} onChange={(e)=> { setData(e.target.value ) }}/><br></br> */}
            <button type="button" onClick={editfunction}>Save changes</button>
          </div>

        </Modal>
      </div>
    </div>
  )
}

export default TodoItem;