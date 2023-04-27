import { Component } from '@angular/core';
import { Task } from './task';
import { Storage } from './storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgenDaz';

  filter: 'all' | 'active' | 'done' = 'all';

  storedTasks = new Storage();

  get tasks() {
    let allStoredTasks = this.storedTasks.get_all();
    if(this.filter === 'all') {
      return allStoredTasks;
    }
    return allStoredTasks.filter(
      (task) => this.filter === 'done'?  task.done : !task.done
      );
  }

  addTask(description: string) {
    this.storedTasks.add(description)
  }

  remove(task: Task){
    this.storedTasks.delete(task.description);
  }

  switch_done(task: Task){
    this.storedTasks.switch_done(task.description);
  }

}
