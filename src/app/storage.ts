import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  public get_all() {
    let all_stored_tasks = new Array<Task>();

    for(var key in localStorage){
      let value = localStorage.getItem(key)!;

      if(value === 'task'){
        all_stored_tasks.push(JSON.parse(key))
      }
    }
    return all_stored_tasks
  }

  public add(target_description: string){
    localStorage.setItem(JSON.stringify({description: target_description, done: false},),'task');
  }

  // A function to find a tag from its description
  find_from_description(target_description: string){
    for(var key in localStorage){
      let value = localStorage.getItem(key)!;

      if(value === 'task'){
        let task = JSON.parse(key);
        if(task.description === target_description){
          return task
        }
      }
    }
  }

  public delete(target_description: string){
    localStorage.removeItem(JSON.stringify(this.find_from_description(target_description)))
  }

  public switch_done(target_description: string){
    let task = this.find_from_description(target_description);
    localStorage.removeItem(JSON.stringify(task));

    task.done = !task.done;
    localStorage.setItem(JSON.stringify(task),'task');
  }

}
