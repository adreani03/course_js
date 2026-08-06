import { Todo } from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del realidad'),
        new Todo('Piedra del campo'),
        new Todo('Piedra del cosmo'),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore🥑');
}


const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    let { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));

    state.todos = todos;
    state; filter = Filters;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter((todo) => todo.done)

        case Filters.Pending:
            return state.todos.filter((todo) => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }

}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {

    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }

        saveStateToLocalStorage();
        return todo;
    });



}

const deleteTodo = (todoId) => {
    if (!todoId) throw new Error('TodoId is required');

    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);

    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    if (!Object.keys(Filters).includes(newFilter)) {
        console.warn(`El filtro ${newFilter} no es valido`)
    }

    state.filter = newFilter;

    saveStateToLocalStorage();


}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}