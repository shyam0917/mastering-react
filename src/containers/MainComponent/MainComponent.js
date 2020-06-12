import React, { Component } from 'react';
import TodoCreater from '../../components/TodoCreater/TodoCreater';
import TodoList from '../TodoList/TodoList';
import './MainComponent.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
class MainComponent extends Component {

    state = {
        initialText: ''
    }


    inputHandler = (event) => {
        this.setState({ initialText: event.target.value })
    }

    createTodo = () => {
        this.props.addTodo(this.state.initialText);
        this.setState({initialText: '' });
    }



    render() {
        return (
            <div className="center">
                <div style={{ "padding": "15px" }}>Todo App</div>
                <TodoCreater inputChange={this.inputHandler} addTodo={this.createTodo}
                    inputVal={this.state.initialText} />
                <TodoList />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         sendTodo: state.todoItems
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({ type: actionTypes.ADD_Todo, todo: todo }),
    }
}

export default connect(null, mapDispatchToProps)(MainComponent)