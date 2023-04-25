import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgenDaz';

  filter: 'all' | 'active' | 'done' = 'all';

  allTasks = [
    {description: 'eat', done: true},
    {description: 'sleep', done: false},
    {description: 'play', done: false},
    {description: 'laugh', done: false},
  ];

  get tasks() {
    if(this.filter === 'all') {
      return this.allTasks;
    }
    return this.allTasks.filter(
      (task) => this.filter === 'done'?  task.done : !task.done
      );
  }

  addTask(description: string) {
    this.allTasks.push({
      description,
      done: false
    });
  }

  remove(task: Task){
    this.allTasks.splice(this.allTasks.indexOf(task), 1);
  }

}
