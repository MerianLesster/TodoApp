import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoDetailsFormComponent } from './todo-details-form/todo-details-form.component';
import { TodoRowComponent } from './todo-row/todo-row.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoDetailsFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoRowComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const todoRowElement = createCustomElement(TodoRowComponent, { injector });
    // const todoDetailFormElement = createCustomElement(TodoDetailsFormComponent, { injector });
    customElements.define('app-todo-row', todoRowElement);
    // customElements.define('to-form', todoDetailFormElement);
  }
  ngDoBootstrap(){}
 }
