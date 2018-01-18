# AngularTodo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Angular Tools and use
| Angular Tool                         | Type                 | Implementation                                                                                                                                                                                                                           |
|--------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *ngFor                               | structural directive | Loop through tasks array and print description                                                                                                                                                                                           |
| (click)="editTask()"                 | event binding        | Run editTask() when button is clicked (one way)                                                                                                                                                                                          |
| [class]= "priorityTask(currentTask)" | property binding     | Run priorityTask() to assign class to li elements based on their priority property                                                                                                                                                       |
| $event.target.value                  | template statement   | retrieves content from the input field (event part of two way binding) note: not necessary when using ngModel                                                                                                                            |
| [value]="name"                       | property binding     | sets HTML value property to the name variable (property part of two way binding)                                                                                                                                                         |
| ngModel                              | directive            | [(ngModel)] is a property binding and event binding. It is on the text and radio fields, which edit the description and priority properties of the Task objects when the user changes the input                                          |
| FormsModule                          | angular core code    | Piece of angular's core code that contains the ngModel directive. Imported module on app.module.ts and added to imports array                                                                                                            |
| *ngIf                                | structural directive | ngIf directive determines whether or not an html element will be rendered based on if the statement is true or not null, or false or null.  *ngIf="selectedTask"  displays the div containing inputs only when there is a selected task. |
| root component                       | angular component    | the root component of this project is app/app.component.ts it is inside the root module, src/app/app.module.ts. children/nested components include: TaskListComponent, EditTaskComponent, NewTaskComponent                               |
