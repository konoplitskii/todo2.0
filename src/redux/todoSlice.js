import {createSlice} from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state,action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
        },
        editTodo(state,action) {
            console.log('Edit')
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export const {addTodo, editTodo, toggleComplete, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;