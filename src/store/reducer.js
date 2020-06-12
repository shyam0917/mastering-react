import * as actionTypes from './actions';

const initialState = {
    // todoItem: "",
    todoItems: [],

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_Todo:
            return {
                ...state,
                todoItems: state.todoItems.concat(action.todo)
            }
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todoItems: state.todoItems.filter(el => el !== action.todo)
            }
        case actionTypes.Update_TODO:
            return {
                ...state,
                todoItems: action.todoList
            }
        default: return state
    }
}


export default reducer