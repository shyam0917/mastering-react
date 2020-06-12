
import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
class TodoList extends Component {

    constructor(props) {
        super()
    }

    state = {
        index: -1
    }



    removeHandler = (prop) => {
        console.log(prop);
        const items = this.props.todoList;
        items.splice(prop.i, 1);
        this.props.updateList(items);
        this.forceUpdate();
    }

    editHandler = (key) => {
        this.setState({ index: key });
    }

    inputHandler = (event) => {
        const updatedItems = this.props.todoList.map((item, index) => {
            if (this.state.index === index) {
                item = event.target.value;
            }
            return item
        })
        this.props.updateList(updatedItems);

    }


    render() {
        let todos;

        if (this.props.todoList.length > 0) {
            todos = this.props.todoList.map((item, index) => {
                return <TodoItem key={index} todo={item} isEdit={this.state.index === index ? false : true} editTodo={this.editHandler} inputChange={this.inputHandler} deleteTodo={this.removeHandler} i={index} />
            })
        }

        return (
            <div>
                {this.props.todoList.length > 0 ? todos : null}
            </div >
        )

    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (todo) => dispatch({ type: actionTypes.REMOVE_TODO, todo: todo }),
        updateList: (todoList) => dispatch({ type: actionTypes.Update_TODO, todoList: todoList })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)