import { Component } from "@angular/core";
import { NgRedux, select } from "ng2-redux";
import { IAppState } from "./store";
import { CLEAR } from "./actions";

@Component({
	selector: 'todo-dashboard',
	templateUrl: './todo-dashboard.html',
})

export class TodoDashboard {

	@select() todos;

	constructor(private ngRedux: NgRedux<IAppState>) {

	}

	deleteAll() {
		this.ngRedux.dispatch({ type: CLEAR });
	}
}
