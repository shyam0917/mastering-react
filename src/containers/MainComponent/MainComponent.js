import React, { Component } from 'react';
import TodoCreater from '../../components/TodoCreater/TodoCreater';
import TodoList from '../TodoList/TodoList';
import './MainComponent.css';

class MainComponent extends Component {

    state = {
        sendTodo: '',
        initialText: ''
    }


    inputHandler = (event) => {
        this.setState({ initialText: event.target.value })
    }

    createTodo = () => {
        this.setState({ sendTodo: this.state.initialText, initialText: '' });

    }



    render() {
        return (
            <div className="center">
                <div style={{ "padding": "15px" }}>Todo App</div>
                <TodoCreater inputChange={this.inputHandler} addTodo={this.createTodo}
                    inputVal={this.state.initialText} />
                <TodoList todoItem={this.state.sendTodo} />
            </div>
        )
    }
}

export default MainComponent