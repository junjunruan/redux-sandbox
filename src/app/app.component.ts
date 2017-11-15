import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux";
import { IAppState, rootReducer } from "./store";
import { INCREMENT } from "./actions";
import { applySourceSpanToExpressionIfNeeded } from "@angular/compiler/src/output/output_ast";

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
    title = 'app';

    constructor(private ngRedux: NgRedux<Map<string, any>>) {
		// var subscription = ngRedux.subscribe(() => {
		// 	let store = ngRedux.getState();
		// 	this.counter = store.counter;
		// });
    }

    increment() {
    	// this.ngRedux.dispatch({ type: 'INCREMENT', body: '', subject: ''});
	    this.ngRedux.dispatch({ type: INCREMENT});
    }
}
