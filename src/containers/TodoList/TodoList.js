
import React, { useState, useEffect } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';


const TodoList = (props) => {

    const [state, setstate] = useState({ items: [], deletedTodo: "", index: -1 });

    useEffect(() => {
            setstate({
                items: state.items.concat(props.todoItem),
                deleteTodo: "",
                index: -1
            })


    }, [props.todoItem])


    const removeHandler = (prop) => {
        const items = [...state.items];
        items.splice(prop.i, 1);
        setstate({ items: items,deleteTodo:"",index:-1 })
    }

    const editHandler = (key) => {
        setstate({ items:state.items,deletedTodo:"",index: key });
    }

    const inputHandler = (event) => {
        const updatedItems = state.items.map((item, index) => {
            if (state.index === index) {
                item = event.target.value;
            }
            return item
        })
        setstate({ items: updatedItems,deletedTodo:"",index:state.index });
    }


    let todos;

    if (state.items && state.items.length > 0) {
        todos = state.items.map((item, index) => {
            return <TodoItem key={index} todo={item} isEdit={state.index === index ? false : true} editTodo={editHandler} inputChange={inputHandler} deleteTodo={removeHandler} i={index} />
        })
    }

    return (
        <div>
            {state.items && state.items.length > 0 ? todos : null}
        </div >
    )

}

export default TodoList