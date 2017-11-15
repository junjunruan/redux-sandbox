import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from "ng2-redux";
import { IAppState, INITIAL_STATE, rootReducer } from "./store";
import { fromJS, Map } from "immutable";


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
	constructor(ngRedux: NgRedux<Map<string, any>) {
		// set the initial state of the store, as there is no
		// initial value in IAppStore interface where we define counter
		ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
	}
}
