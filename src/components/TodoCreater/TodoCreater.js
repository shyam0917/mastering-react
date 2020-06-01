
import React from 'react';

const TodoCreater = (props) => {



    return (
        <div>
            <input  style={{"padding":"8px","width": "290px"}} type="text" id="todoInput" value={props.inputVal} onChange={props.inputChange} />
            <button  style={{"padding":"8px"}} type="submit" onClick={props.addTodo}>ADD</button>
        </div>
    )
}

export default TodoCreater