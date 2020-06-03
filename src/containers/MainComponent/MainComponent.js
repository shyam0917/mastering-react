import React, { useState } from 'react';
import TodoCreater from '../../components/TodoCreater/TodoCreater';
import TodoList from '../TodoList/TodoList';
import './MainComponent.css';

const MainComponent = ()=> {

    const [sendTodo, setsendTodo] = useState('');
    const [initialText, setinitialText] = useState('');

    const inputHandler = (event) => {
        setinitialText(event.target.value);
    }

    const createTodo = () => {
        setsendTodo(initialText);
        setinitialText('');

    }


        return (
            <div className="center">
                <div style={{ "padding": "15px" }}>Todo App</div>
                <TodoCreater inputChange={inputHandler} addTodo={createTodo}
                    inputVal={initialText} />
                    {sendTodo !== '' ? <TodoList todoItem={sendTodo} /> : null }
                
            </div>
        )
}

export default MainComponent