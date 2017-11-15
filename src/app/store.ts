import { ADD, CLEAR, INCREMENT, REMOVE, TOGGLE } from "./actions";
import { tassign } from "tassign";
import { fromJS, Map } from "immutable";

export interface IAppState {
	todos: any[];
    counter: number;
}

export const INITIAL_STATE: IAppState = {
	todos: [],
	counter: 0
}

export function rootReducer(state: IAppState, action): IAppState {
	switch (action.type) {
		// case INCREMENT:
		// 	// return { counter: state.counter + 1 };
		// 	// in this way, it will combine state and counter into the {} object
		// 	// return Object.assign({}, state, { counter: state.counter + 1, isOnline: true });
		// 	// compare to Object.assign, it only need two objects here
		// 	return tassign(state, { counter: state.counter + 1 });
		// 	// return state.set('counter', state.get('counter') + 1);
		case ADD:
			let newTodo = { id: state.todos.length + 1, title: action.title };
			return tassign(state, { todos: state.todos.concat(newTodo) });
		case REMOVE:
			return tassign(state, { todos: state.todos.filter(i => i.id !== action.id) });
		case TOGGLE:
			let todo = state.todos.find( t => t === action.id);
			// let index = state.todos.findIndex( t => t === action.id);
			let index = state.todos.indexOf(todo);
			return tassign(state, {
				todos: [
					...state.todos.slice(0, index),
					tassign( todo, { isToggled: !todo.isToggled }),
					...state.todos.slice(index + 1)
				]
			});
		case CLEAR:
			return tassign(state, { todos: []});
	}
    return state;
}
