import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux";
import { IAppState } from "./store";
import { ADD, INCREMENT, REMOVE, TOGGLE } from "./actions";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	// don't need initialize the value as it exist in store.ts file
	@select() counter; // state.get('counter')
	// @select(s => s.get('counter')) count;
	// @select(['messaging', 'newMessages']) newMessages;
	// @select((s: IAppState) => s.messaging.newMessages) newMessage;
    title = '';
	// todos: any[];
	@select() todos;

    constructor(private ngRedux: NgRedux<IAppState>) {
		// var subscription = ngRedux.subscribe(() => {
		// 	let store = ngRedux.getState();
		// 	this.counter = store.counter;
		// });
    }

    increment() {
    	// this.ngRedux.dispatch({ type: 'INCREMENT', body: '', subject: ''});
	    this.ngRedux.dispatch({ type: INCREMENT });
    }

	onKeyup(e) {
    	this.title = e.target.value;
    	console.log(this.title);
	}

	addItem(inputTitle) {
		this.ngRedux.dispatch({ type: ADD, title: this.title });
		inputTitle.value = '';
	}

	toggleTitle(todo) {
		this.ngRedux.dispatch({ type: TOGGLE, id: todo.id });
	}

	removeItem(todo) {
		this.ngRedux.dispatch({ type: REMOVE, id: todo.id });
	}
}
