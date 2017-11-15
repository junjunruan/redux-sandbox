import { INCREMENT } from "./actions";
import { tassign } from "tassign";
import { fromJS, Map } from "immutable";

export interface IAppState {
    counter: number;
    messaging?: {
    	newMessages: number;
    };
}

export const INITIAL_STATE: IAppState = {
	counter: 0,
	messaging: {
		newMessages: 5
	}
}

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
	switch (action.type) {
		case INCREMENT:
			// return { counter: state.counter + 1 };
			// in this way, it will combine state and counter into the {} object
			// return Object.assign({}, state, { counter: state.counter + 1, isOnline: true });
			// compare to Object.assign, it only need two objects here
			// return tassign(state, { counter: state.counter + 1});
			return state.set('counter', state.get('counter') + 1);
	}
    return state;
}
