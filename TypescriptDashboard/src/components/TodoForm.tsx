import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/todoSlice';
import { TextField, Button } from '@material-ui/core';
// import TodoItem from './TodoItem';
import axios from "axios";

const TodoForm = (): JSX.Element => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');
   // const [check, setCheck] = useState(false);
    let styleobject = {
        padding: '10px',
        color: 'gray'
    }
    let textboxstyle = {
        width: '100%'
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        setText(text);
        try {
            let userid = localStorage.getItem('user');
            let res = await axios.post(`http://localhost:5000/addtodo/63a032ef41ff07d7eed46839`, {
                "todo_description": text
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Todo registered successfully');
            console.log("resjson " + JSON.stringify(res.data.message));
        } catch (err) {
            console.log(err);
        }
        dispatch(addItem({ title: text, id: new Date().getTime().toString() }));
        setText('');
    };
    return (
        <form className='container-fluid' onSubmit={handleSubmit} >
            <div className='input-group-container' style={textboxstyle}>
                <TextField fullWidth placeholder='Enter Todo list' value={text} margin="normal" className=' user-input' onChange={(e) => setText(e.target.value)} variant='outlined'></TextField>
                <br />
                <Button type="submit" className='buttonclass' >
                    Add
                </Button>
            </div>
        </form>
    )

}


export default TodoForm;