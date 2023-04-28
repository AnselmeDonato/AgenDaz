import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../task";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  editable = false;

  @Input() task!: Task;
  // @Output() edit = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<Task>();
  @Output() switch_done = new EventEmitter<Task>();

  // saveTask(description: string) {
    //TODO with the LocalStorage

    // if (!description) return;
    // this.editable = false;
    // this.task.description = description;
  // }

}
