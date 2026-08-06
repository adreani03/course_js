import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {String} elementId 
 */
export const rederPending = (elementId) => {
    if (elementId) element = document.querySelector(elementId);

    if (!elementId) throw new Error(`${elementId} not found`);

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}