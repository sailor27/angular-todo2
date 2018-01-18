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
		new Task('Finish weekend homework', 2),
		new Task('Begin brainstorming possible JavaScript group projects', 1),
		new Task('Add README file to last few Angular repos on GitHub', 3)
	];
	selectedTask: Task = this.tasks[0];
	editTask(clickedTask) {
		this.selectedTask = clickedTask;
	}

	isDone(clickedTask: Task){
		if(clickedTask.done === true) {
			alert("this task is done");
		} else {
			alert("this task is not done");
		}
	}
	priorityTask(currentTask){
		if (currentTask.priority === 3){
			return "bg-danger";
		} else if (currentTask.priority === 2){
			return "bg-warning";
		} else {
			return "bg-info";
		}
	}
}

export class Task {
	public done: boolean = false;
	constructor(public description: string, public priority: number){ }
}
