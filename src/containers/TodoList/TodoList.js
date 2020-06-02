
import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem'
class TodoList extends Component {

    constructor(props) {
        super()
    }

    state = {
        items: [],
        deletedTodo: '',
        index: -1
    }


    componentDidUpdate(prevProps) {
        if (this.props.todoItem !== prevProps.todoItem) {
            this.setState({ items: this.state.items.concat(this.props.todoItem) })
        }


    }

    removeHandler = (prop) => {
        const items = [...this.state.items];
        items.splice(prop.i,1);
        this.setState({items: items})
    }

    editHandler = (key) => {
       this.setState({index: key});
    }

    inputHandler = (event) => {
        console.log("Yyyttttt", event.target.value);
        const updatedItems = this.state.items.map((item,index)=>{
            if(this.state.index===index){
            item = event.target.value;
            }
            return item
        })

        this.setState({items: updatedItems});
    }


    render() {
        let todos;

        if (this.state.items.length > 0) {
            todos = this.state.items.map((item, index) => {
                return <TodoItem key={index} todo={item} isEdit={this.state.index===index ? false: true} editTodo={this.editHandler} inputChange={this.inputHandler} deleteTodo={this.removeHandler} i={index} />
            })
        }

        return (
            <div>
                {this.state.items.length > 0 ? todos : null}
            </div >
        )

    }
}

export default TodoList