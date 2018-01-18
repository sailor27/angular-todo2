import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
	currentFocus: string = 'Angular Homework';
	currentTime = new Date();
	month: number = this.currentTime.getMonth() + 1;
	day: number = this.currentTime.getDate();
	year: number = this.currentTime.getFullYear();
	tasks: Task[] = [
		new Task("Finish weekend homework"),
		new Task('Begin brainstorming possible JavaScript group projects'),
		new Task('Add README file to last few Angular repos on GitHub')
	];
		editTask() {
		alert("You just requested to edit a Task!");
	}

	isDone(clickedTask: Task){
		if(clickedTask.done === true) {
			alert("this task is done");
		} else {
			alert("this task is not done");
		}
	}
}

export class Task {
	public done: boolean = false;
	constructor(public description: string){ }
}
