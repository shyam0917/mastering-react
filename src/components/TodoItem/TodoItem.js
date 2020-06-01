
import React from 'react';
import './TodoItem.css';
const TodoItem = (props) => {

    return (
        <div style={{"marginTop":"12px"}}> 
            <input type="text" value={props.todo} onChange={props.inputChange} readOnly={props.isEdit} />
            <span className="set-span"><i onClick={()=>props.editTodo()}  className="fa fa-edit"></i><i onClick={(e)=>props.deleteTodo(props,e)} className="fa fa-trash"></i></span>
        </div>
    )
}

export default TodoItem